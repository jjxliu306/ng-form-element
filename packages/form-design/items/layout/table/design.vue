<template>
	<div class="table-box" @click.stop="handleSelectItem(record)">
		<table
			:class="[
				'table-layout',
				'form-table',
				record.options.customClass ? record.options.customClass : '',
				record.options.bright ? 'bright' : '',
				record.options.small ? 'small' : '',
				record.options.bordered ? 'bordered' : '',
			]"
			:style="record.options.customStyle"
		>
			<tr v-for="(trItem, trIndex) in record.trs" :key="trIndex">
				<td
					:class="['table-td', tdItem.class]"
					:style="tdItem.style"
					v-for="(tdItem, tdIndex) in trItem.tds"
					:key="tdIndex"
					:colspan="tdItem.colspan"
					:rowspan="tdItem.rowspan"
					@contextmenu.prevent="
						showRightMenuHandle(
							$event,
							trIndex,
							tdIndex,
							tdItem.colspan > 1 || tdItem.rowspan > 1
						)
					"
				>
					<draggable
						tag="div"
						class="draggable-box td-draggable"
						:style="{
							'min-height': (tdItem.rowspan > 1 ? tdItem.rowspan * 65 : 45) + 'px',
						}"
						v-bind="{
							group: 'form-draggable',
							ghostClass: 'moving',
							animation: 180,
							handle: '.drag-move',
						}"
						:force-fallback="true"
						v-model="tdItem.list"
						@add="dragEnd($event, tdItem.list)"
					>
						<el-row class="td-row">
							<template v-for="item in tdItem.list">
								<ng-form-node
									:key="item.key"
									class="drag-move"
									:selectItem="selectItem"
									:record="item"
									@handleSelectItem="handleSelectItem"
									@handleCopy="handleCopy(item, tdItem)"
									@handleDetele="handleDetele(item, tdItem)"
								/>
							</template>
						</el-row>
					</draggable>
				</td>
			</tr>
		</table>

		<div
			v-show="showRightMenu"
			:style="{ top: menuTop + 'px', left: menuLeft + 'px' }"
			class="right-menu"
			id="table-design-rightmenu"
		>
			<ul>
				<li @click="handleSettingStyle">
					<i class="el-icon-magic-stick" />
					样式配置
				</li>
				<hr />
				<template v-if="isMergeCol">
					<li @click="handleDropMerge(null, trIndex, tdIndex)">
						<i class="el-icon-delete" />
						解除合并
					</li>
					<hr />
				</template>
				<li @click="handleDownMerge">
					<i class="el-icon-bottom" />
					向下合并
				</li>
				<li @click="handleRightMerge">
					<i class="el-icon-right" />
					向右合并
				</li>
				<li @click="handleAddCol">
					<i class="el-icon-zoom-in" />
					增加一列
				</li>
				<li @click="handleAddRow">
					<i class="el-icon-zoom-in" />
					增加一行
				</li>
				<hr />
				<li @click="handleRemoveRow">
					<i class="el-icon-zoom-out" />
					删除当前行
				</li>
				<li @click="handleRemoveCol">
					<i class="el-icon-zoom-out" />
					删除当前列
				</li>
			</ul>
		</div>

		<el-dialog
			title="表内单元格样式配置"
			:visible.sync="styleVisible"
			style="top: 20px"
			:append-to-body="true"
		>
			<el-form size="mini" :model="tdStyle" label-width="80px">
				<el-form-item label="class">
					<el-input v-model="tdStyle.class" placeholder="请输入class名称" />
				</el-form-item>
				<el-form-item label="style">
					<el-input
						type="textarea"
						:rows="3"
						v-model="tdStyle.style"
						placeholder="请输入css样式"
					/>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="styleVisible = false">取 消</el-button>
				<el-button type="primary" @click="settingStyle">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep';
import mixin from '../../mixin.js';
import draggable from 'vuedraggable';
export default {
	mixins: [mixin],
	components: {
		draggable,
	},
	data() {
		return {
			showRightMenu: false,
			isMergeCol: false,
			menuTop: 0,
			menuLeft: 0,
			trIndex: 0,
			tdIndex: 0,

			styleVisible: false,
			tdStyle: {
				style: '',
				class: '',
			},
		};
	},
	created() {
		if (this.record && (this.record.trs == null || this.record.trs == undefined)) {
			this.$set(this.record, 'trs', [
				{
					tds: [
						{
							colspan: 1,
							rowspan: 1,
							list: [],
						},
						{
							colspan: 1,
							rowspan: 1,
							list: [],
						},
					],
				},
				{
					tds: [
						{
							colspan: 1,
							rowspan: 1,
							list: [],
						},
						{
							colspan: 1,
							rowspan: 1,
							list: [],
						},
					],
				},
			]);
		}
	},
	mounted() {
		// 添加监听取消右键菜单
		document.addEventListener('click', this.handleRemoveRightMenu, true);
		document.addEventListener('contextmenu', this.handleRemoveRightMenu, true);
	},
	destroyed() {
		// 移除监听
		document.removeEventListener('click', this.handleRemoveRightMenu, true);
		document.removeEventListener('contextmenu', this.handleRemoveRightMenu, true);
	},
	methods: {
		dragEnd(evt, list) {
			// 拖拽结束,自动选择拖拽的控件项
			const clone = this.cloneDeepAndFormat(list[evt.newIndex])
		    // 去掉icon
		    delete clone.icon 
		    this.$set(list , evt.newIndex , clone) 
			this.handleSelectItem(list[evt.newIndex]);
		},
		handleCopy(item, parent) {
			const nitem = cloneDeep(item);
			const key = item.type + '_' + new Date().getTime();
			nitem.key = key;
			nitem.model = key;

			// 找到index 插入
			const oindex = parent.list.findIndex(t => t.key == item.key);

			if (oindex >= 0) {
				// insert
				parent.list.splice(oindex + 1, 0, nitem);
			}
		},
		handleDetele(item, parent) {
			const oindex = parent.list.findIndex(t => t.key == item.key);
			if (oindex >= 0) {
				parent.list.splice(oindex, 1);
			}
		},
		// 解除所有合并单元格
		handleDropMergeAll(record) {
			record = record || this.record;

			//保证所有单元格都是1*1
			while (!isDropAll()) {
				//一边解除合并一边遍历，一次循环不一定能解除所有合并单元格
				handleDrop(this);
			}
			function handleDrop(that) {
				record.trs.forEach((tr, trIndex) => {
					tr.tds.forEach((td, tdIndex) => {
						that.handleDropMerge(record, trIndex, tdIndex);
					});
				});
			}

			function isDropAll() {
				let isDropAll = true;
				record.trs.forEach(tr => {
					tr.tds.forEach(td => {
						if (td.colspan > 1 || td.rowspan > 1) {
							isDropAll = false;
						}
					});
				});
				return isDropAll;
			}
		},
		// 解除合并
		handleDropMerge(record, trIndex, tdIndex) {
			record = record || this.record;
			const td = record.trs[trIndex].tds[tdIndex];

			const colspan = td.colspan;
			const rowspan = td.rowspan;

			if (td && (colspan > 1 || rowspan > 1)) {
				record.trs[trIndex].tds[tdIndex].colspan = 1;
				record.trs[trIndex].tds[tdIndex].rowspan = 1;

				// 开始拆解
				if (colspan > 1) {
					for (var i = 0; i < colspan - 1; i++) {
						record.trs[trIndex].tds.splice(tdIndex + 1, 0, {
							colspan: 1,
							rowspan: 1,
							list: [],
						});
					}
				}
				if (rowspan > 1) {
					//cols + 1
					for (var j = trIndex + 1; j < trIndex + rowspan; j++) {
						record.trs[j].tds.splice(tdIndex, 0, {
							colspan: 1,
							rowspan: 1,
							list: [],
						});
					}
				}

				// 斜角方向追加td,填补空隙
				if (rowspan > 1 && colspan > 1) {
					for (var y = trIndex + 1; y < trIndex + rowspan; y++) {
						const tds = [];
						//插入 rowspan - 1 个td
						for (var q = tdIndex + 1; q < tdIndex + colspan; q++) {
							tds.push({
								colspan: 1,
								rowspan: 1,
								list: [],
							});
						}
						record.trs[y].tds.splice(tdIndex, 0, ...tds);
					}
				}
			}
		},
		handleDownMerge() {
			//向下合并
			const storeRecord = cloneDeep(this.record);
			//在storeRecord中标记当前选中的td
			storeRecord.trs[this.trIndex].tds[this.tdIndex].isSelect = true;
			//释放storeRecord中的td
			this.handleDropMergeAll(storeRecord);
			let currentX = 0; //当前选中td的x坐标
			const currentColspan = this.record.trs[this.trIndex].tds[this.tdIndex].colspan; //当前选中td的colspan
			let maxX = 0; //最大的x坐标
			//找到被选中的td的x,y坐标
			storeRecord.trs.forEach((tr, y) => {
				tr.tds.forEach((td, x) => {
					if (x > maxX) maxX = x;
					if (td.isSelect) {
						currentX = x; //定位到当前选中的td的真实x坐标
					}
				});
			});
			// 向下合并,需要满足x坐标相同,colspan相同
			//从trIndex+1开始遍历，直到找到下一个可以合并的td或者遍历结束
			for (let y = this.trIndex + 1; y < this.record.trs.length; y++) {
				for (let x = 0; x < maxX + 1; x++) {
					let td = this.record.trs[y].tds[x];
					if (td) {
						const copy = cloneDeep(this.record);
						copy.trs[y].tds[x].isSelect = true; //标记copy中的td
						const targetRowspan = copy.trs[y].tds[x].rowspan; //目标td的rowspan
						const targetColspan = copy.trs[y].tds[x].colspan; //目标td的colspan
						let targetX = 0; //目标td的x坐标
						this.handleDropMergeAll(copy); //释放copy中的td
						copy.trs.forEach((tr, y) => {
							tr.tds.forEach((td, x) => {
								if (td.isSelect) {
									targetX = x; //定位到目标td的真实x坐标
								}
							});
						});

						const targetLeft = targetX;
						const currentLeft = currentX;
						const targetRight = targetX + targetColspan - 1;
						const currentRight = currentX + currentColspan - 1;

						//与目标完全接触，可以合并
						if (targetLeft === currentLeft && targetColspan === currentColspan) {
							//找到了可以合并的td
							this.record.trs[this.trIndex].tds[this.tdIndex].rowspan +=
								targetRowspan;
							//将target的list合并到当前td的list中
							this.record.trs[this.trIndex].tds[this.tdIndex].list = this.record.trs[
								this.trIndex
							].tds[this.tdIndex].list.concat(this.record.trs[y].tds[x].list);
							//删除target
							this.record.trs[y].tds.splice(x, 1);
							//结束循环
							return false;
						}

						//与目标不完全接触，无法合并跳出循环
						const conditions = [
							targetLeft <= currentLeft &&
								targetRight >= currentLeft &&
								targetRight <= currentRight,
							targetLeft >= currentLeft && targetLeft <= currentRight,
							targetLeft <= currentRight && targetRight >= currentRight,
						];
						if (conditions.includes(true)) {
							this.$message.error('当前表格无法向下合并');
							return false;
						}
					}
				}
			}
			this.$message.error('当前表格无法向下合并');
		},
		handleRightMerge() {
			//向右合并
			let storeRecord = cloneDeep(this.record);
			//在storeRecord中标记当前选中的td
			storeRecord.trs[this.trIndex].tds[this.tdIndex].isSelect = true;
			//释放storeRecord中的td
			this.handleDropMergeAll(storeRecord);
			let currentY = 0; //当前选中td的y坐标
			let currentX = 0; //当前选中td的x坐标
			const currentRowspan = this.record.trs[this.trIndex].tds[this.tdIndex].rowspan; //当前选中td的rowspan
			const currentColspan = this.record.trs[this.trIndex].tds[this.tdIndex].colspan; //当前选中td的colspan
			let maxX = 3; //最大的x坐标
			//找到被选中的td的x,y坐标
			storeRecord.trs.forEach((tr, y) => {
				tr.tds.forEach((td, x) => {
					if (x > maxX) maxX = x;
					if (td.isSelect) {
						currentY = y; //定位到当前选中的td的真实y坐标
						currentX = x; //定位到当前选中的td的真实x坐标
					}
				});
			});

			//对当前行进行遍历
			for (let x = this.tdIndex + 1; x < maxX; x++) {
				let td = this.record.trs[this.trIndex].tds[x];
				if (td) {
					const copy = cloneDeep(this.record);
					copy.trs[this.trIndex].tds[x].isSelect = true; //标记copy中的td
					const targetRowspan = copy.trs[this.trIndex].tds[x].rowspan; //目标td的rowspan
					const targetColspan = copy.trs[this.trIndex].tds[x].colspan; //目标td的colspan
					let targetY = 0; //目标td的y坐标
					let targetX = 0; //目标td的x坐标
					this.handleDropMergeAll(copy); //释放copy中的td
					copy.trs.forEach((tr, y) => {
						tr.tds.forEach((td, x) => {
							if (td.isSelect) {
								targetY = y; //定位到目标td的真实x坐标
								targetX = x; //定位到目标td的真实y坐标
							}
						});
					});

					const targetTop = targetY;
					const currentTop = currentY;
					const targetLeft = targetX;
					const currentRight = currentX;

					//横向不接触，不可以合并
					if (currentRight + currentColspan !== targetLeft) {
						this.$message.error('当前表格无法向右合并');
						return false;
					}

					if (targetTop === currentTop && targetRowspan === currentRowspan) {
						//与目标完全接触，可以合并
						//找到了可以合并的td
						this.record.trs[this.trIndex].tds[this.tdIndex].colspan += targetColspan;
						//将target的list合并到当前td的list中
						this.record.trs[this.trIndex].tds[this.tdIndex].list = this.record.trs[
							this.trIndex
						].tds[this.tdIndex].list.concat(this.record.trs[this.trIndex].tds[x].list);
						//删除target
						this.record.trs[this.trIndex].tds.splice(x, 1);
						//结束循环
						return false;
					}
				}
			}
			this.$message.error('当前表格无法向右合并');
		},
		handleAddCol() {
			// 增加列
			this.record.trs.forEach(item => {
				item.tds.splice(this.tdIndex + 1, 0, {
					colspan: 1,
					rowspan: 1,
					list: [],
				});
			});
		},
		handleAddRow() {
			// 增加行
			// 获取总col值
			const sumCols = this.record.trs[0].tds
				.map(item => item.colspan)
				.reduce(function (partial, value) {
					return partial + value;
				});
			const rowJson = { tds: [] };
			for (let i = 0; i < sumCols; i++) {
				rowJson.tds.push({
					colspan: 1,
					rowspan: 1,
					list: [],
				});
			}
			this.record.trs.push(rowJson);
		},
		handleRemoveRow() {
			// 删除一行
			const tri = this.trIndex;
			const len = this.record.trs.length;
			const colspan = this.record.trs[tri].tds[this.tdIndex].colspan;
			const rowspan = this.record.trs[tri].tds[this.tdIndex].rowspan;
			if (colspan > 1 || rowspan > 1) {
				this.$message.error('当前单元格已合并，无法删除');
				return;
			}
			if (len <= 1) {
				this.$message.error('当前是最后一行,无法删除');
				return;
			}
			this.record.trs.splice(tri, 1);
		},
		handleRemoveCol() {
			// 删除一列
			const tdi = this.tdIndex;

			const colspan = this.record.trs[this.trIndex].tds[this.tdIndex].colspan;
			const rowspan = this.record.trs[this.trIndex].tds[this.tdIndex].rowspan;

			if (colspan > 1 || rowspan > 1) {
				this.$message.error('当前单元格已合并，无法删除');
				return;
			}

			// 存在任意行中的列数 <= 1 不允许删除

			for (let i in this.record.trs) {
				let tds = this.record.trs[i].tds;
				if (tds.length <= 1) {
					this.$message.error('当前只剩下最后一列,无法删除');
					return;
				}
			}

			this.record.trs.forEach(t => {
				t.tds.splice(tdi, 1);
			});
		},
		handleSettingStyle() {
			// 样式配置
			const td = this.record.trs[this.trIndex].tds[this.tdIndex];

			const class_ = td.class;
			const style_ = td.style;

			this.tdStyle.style = style_;
			this.tdStyle.class = class_;

			this.styleVisible = true;
		},
		settingStyle() {
			// 样式生效
			const td = this.record.trs[this.trIndex].tds[this.tdIndex];
			td.style = this.tdStyle.style;
			td.class = this.tdStyle.class;

			// 重新绘制 修改数据
			this.record.trs[this.trIndex].tds.splice(this.tdIndex, 1, td);

			this.styleVisible = false;
		},
		showRightMenuHandle(e, trIndex, tdIndex, mergeCol) {
			// 显示右键菜单
			e.stopPropagation();
			// this.fileItem = item
			// 显示
			this.showRightMenu = true;

			// 计算rightMenu得高度和宽度 和当前屏幕对比 来决定菜单出现得起始位置
			let height = 210;
			let width = 280;

			// 获取屏幕高度和宽度 比对
			const bodyHeight = document.body.clientHeight;
			const bodyWidth = document.body.clientWidth;

			// 定位
			if (e.clientY + height > bodyHeight) {
				this.menuTop = e.clientY - height;
			} else {
				this.menuTop = e.clientY;
			}

			if (e.clientX + width > bodyWidth) {
				this.menuLeft = e.clientX - width;
			} else {
				this.menuLeft = e.clientX + 20;
			}

			this.trIndex = trIndex;
			this.tdIndex = tdIndex;

			// 判断是否是已经合并过的单元格 isMergeCol
			this.isMergeCol = mergeCol;

			return false;
		},
		handleRemoveRightMenu() {
			// 取消右键菜单
			this.showRightMenu = false;
		},
	},
};
</script>
<style>
.table-layout {
	table-layout: fixed;
}
.table-box .td-draggable,
.table-box .td-row {
	min-height: 65px;
	min-width: 100px;
}

.table-box .td-draggable {
	border: 1px solid #e8e8e8 !important;
}
</style>
<!-- 
<style lang="scss">
.table-box {
	.td-draggable , .td-row {
		min-height: 65px;
		min-width: 100px;
	}

	.td-draggable{
		border: 1px solid #e8e8e8 !important;

	}
}

</style>
 -->

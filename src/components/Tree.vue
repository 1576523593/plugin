<template>
  <el-container style="border: 1px solid #eee">
    <el-row style="width: 100%">
      <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="4" class="aside">
        <div class="asideButton"></div>
        <el-aside style="padding-top:10px">
          <el-tree
            :data="setTree"
            :props="defaultProps"
            node-key="id"
            ref="SlotMenuList"
            :filter-node-method="filterNode"
            @node-contextmenu='rihgtClick'
            accordion
          >
            <span class="slot-t-node" slot-scope="{ node, data }">
              <span v-show="!node.isEdit">
                <span v-show="data.children && data.children.length >= 1">
                  <i :class="{ 'fa fa-plus-square': !node.expanded, 'fa fa-minus-square':node.expanded}" />
                  <span :class="[data.id >= maxexpandId ? 'slot-t-node--label' : '']">{{node.label}}</span>
                </span>
                <span v-show="!data.children || data.children.length == 0">
                  <i class='' style='margin-right:10px'></i>
                  <span :class="[data.id >= maxexpandId ? 'slot-t-node--label' : '']">{{node.label}}</span>
                </span>
              </span>
              <!-- 编辑输入框 -->
              <span v-show="node.isEdit">
                <el-input class="slot-t-input" size="mini" autofocus
                          v-model="data.name"
                          :ref="'slotTreeInput'+data.id"
                          @blur.stop="NodeBlur(node, data)"
                          @keyup.enter.native="NodeBlur(node, data)"></el-input>
              </span>
            </span>
          </el-tree>
          <!--鼠标右键点击出现页面-->
          <div v-show="menuVisible">
            <el-menu
              id = "rightClickMenu"
              class="el-menu-vertical"
              @select="handleRightSelect"
              active-text-color="blue"
              text-color="#fff"
            style="background-color: blue">
              <el-menu-item index="1" class="menuItem">
                <span slot="title">添加分类</span>
              </el-menu-item>
              <el-menu-item index="2" class="menuItem">
                <span slot="title">修改分类</span>
              </el-menu-item>
              <el-menu-item index="3" class="menuItem">
                <span slot="title">删除分类</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-aside>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      DATA: null,
      NODE: null,
      dialogFormVisible: false,
      dialogClassifyVisible: false,
      maxexpandId: '', // 新增节点开始id
      non_maxexpandId: '', // 新增节点开始id(不更改)
      isLoadingTree: true, // 是否加载节点树
      setTree: [], // 节点树数据
      defaultProps: {
        children: 'children',
        label: 'nodeName',
        id: 'nodeId'
      },
      input: '',
      input2: '',
      currentPage4: 4,
      editObj: {},
      menuVisible: false,
      objectID: null,
      /* 分类修改 */
      menuVisible2: false,
      objectID2: null
    }
  },
  created () {
    this.goodsCategory()
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    // 递归方法
    getTreeData (data) {
      // 循环遍历json数据
      for (var i = 0; i < data.length; i++) {
        if (data[i].children.length < 1) {
          // children若为空数组，则将children设为undefined
          data[i].children = undefined
        } else {
          // children若不为空数组，则继续 递归调用 本方法
          this.getTreeData(data[i].children)
        }
      }
      return data
    },
    // 获取级联
    goodsCategory () {
      this.$http(this.api.goodsCategory()).then(res => {
        this.setTree = this.getTreeData(res.data.goodsCategory)
      })
    },
    handleRightSelect (key) {
      if (key === 1) {
        this.NodeAdd(this.NODE, this.DATA)
        this.menuVisible = false
      } else if (key === 2) {
        this.NodeEdit(this.NODE, this.DATA)
        this.menuVisible = false
      } else if (key === 3) {
        this.NodeDel(this.NODE, this.DATA)
        this.menuVisible = false
      }
    },
    NodeBlur (n, d) { // 输入框失焦
      if (n.isEdit) {
        this.$set(n, 'isEdit', false)
      }
      this.$nextTick(() => {
        this.$refs['slotTreeInput' + d.id].$refs.input.focus()
      })
    },
    NodeEdit (n, d) { // 编辑节点
      if (!n.isEdit) { // 检测isEdit是否存在or是否为false
        this.$set(n, 'isEdit', true)
      }
    },
    NodeDel (n, d) { // 删除节点
      if (d.children && d.children.length !== 0) {
        this.$message.error('此节点有子级，不可删除！')
        return false
      } else {
        // 新增节点可直接删除，已存在的节点要二次确认
        // 删除操作
        let DelFun = () => {
          let _list = n.parent.data.children || n.parent.data// 节点同级数据
          let _index = _list.map((c) => c.id).indexOf(d.id)
          _list.splice(_index, 1)
          this.$message.success('删除成功！')
        }
        // 二次确认
        let ConfirmFun = () => {
          this.$confirm('是否删除此节点？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            DelFun()
          }).catch(() => {})
        }
        // 判断是否是新增节点
        d.id > this.non_maxexpandId ? DelFun() : ConfirmFun()
      }
    },
    NodeAdd (n, d) { // 新增节点
      // 判断层级
      if (n.level >= 4) {
        this.$message.error('最多只支持四级！')
        return false
      }
      // 新增数据
      d.children.push({
        id: ++this.maxexpandId,
        name: '新增节点',
        pid: d.id,
        children: []
      })
      // 同时展开节点
      if (!n.expanded) {
        n.expanded = true
      }
    },
    rihgtClick (event, object, value, element) {
      if (this.objectID !== object.id) {
        this.objectID = object.id
        this.menuVisible = true
        this.DATA = object
        this.NODE = value
      } else {
        this.menuVisible = !this.menuVisible
      }
      document.addEventListener('click', (e) => {
        this.menuVisible = false
      })
      let menu = document.querySelector('#rightClickMenu')
      /* 菜单定位基于鼠标点击位置 */
      menu.style.left = event.clientX + 20 + 'px'
      menu.style.top = event.clientY - 30 + 'px'
      menu.style.position = 'absolute' // 为新创建的DIV指定绝对定位
      menu.style.width = 160 + 'px'
    }
  }
}
</script>
<style lang="less" scoped>
  .popover-new {
    // position: absolute!important;
    // right: 0;
    // bottom: 0;
  }
  /*顶部按钮*/
  .slot-tree .slot-t-top{
    margin-bottom: 15px;
  }
  .slot-tree .slot-t-node span{
    display: inline-block;
  }
  /*节点*/
  .slot-tree .slot-t-node--label{
    font-weight: 600;
  }
  /*输入框*/
  .slot-tree .slot-t-input .el-input__inner{
    // height: 26px;
    // line-height: 26px;
  }
  /*按钮列表*/
  .slot-tree .slot-t-node .slot-t-icons{
    display: none;
    margin-left: 10px;
  }
  .slot-tree .slot-t-icons .el-button+.el-button{
    margin-left: 6px;
  }
  .slot-tree .el-tree-node__content:hover .slot-t-icons{
    display: inline-block;
  }
</style>

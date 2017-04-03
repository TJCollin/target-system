<template>
    <!-- Main content -->
  <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header with-border">
            <!-- <h3 class="box-title">调休使用记录</h3> -->
            <form action="" class="form-inline">
              
              <div class="form-group">
                <label for="">组名</label>
                <input type="text" class="form-control" v-model="searchText" placeholder="组名">

              <div class="form-group">
                <button data-toggle="modal" data-target="#modal2" class="btn btn-primary" @click="loadInitItem">
                  增加
                </button>
              </div>
            </form>
            
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <table class="table table-bordered">
              <thead>
              	<tr>
                  <th>组号</th>
                  <th>组名</th>
                  <th>组成员</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr class="even" role="row" v-for="item in groupItems">
                  <td>{{ item.groupid }}</td>
                  <td>{{ item.groupname }}</td>
                  <td>{{ item.username }}</td>
                  <td>
                    <button class="btn btn-primary"  data-toggle="modal" data-target="#modal" @click="setItem(item)">修改</button>
                    <button class="btn btn-primary" @click="deleteItem(item)">删除</button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colspan="1" rowspan="1">组号</th>
                  <th colspan="1" rowspan="1">组名</th>
                  <th colspan="1" rowspan="1">组成员</th>
                  <th colspan="1" rowspan="1">操作</th>
                </tr>
              </tfoot>

            </table>
          </div>
          <!-- /.box-body -->
        <!-- /.box -->
      </div>
    </div>

    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">请输入修改信息</h4>
            </div>
            <div class="modal-body">
              <form action="">
                <div class="form-group">
                  <label for="">组名</label>
                  <input type="text" class="form-control" v-model="activeItem.groupname">
                </div>
                <div class="box">
                  <div class="box-header with-border">
                    <form action="" class="form-inline">
                      <div class="form-group">
                        <label for="">姓名</label>
                        <input type="text" class="form-control" v-model="searchCheckText" placeholder="姓名">
                      </div>
                    </form>
                  </div>
                  <div class="box-body">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>工号</th>
                          <th>姓名</th>
                          <th>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="even" role="row" v-for="item in checkItems">
                          <td>{{ item.id }}</td>
                          <td>{{ item.name }}</td>
                          <td><input type="checkbox" v-model="item.checked"></td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colspan="1" rowspan="1">工号</th>
                          <th colspan="1" rowspan="1">姓名</th>
                          <th colspan="1" rowspan="1">操作</th>
                        </tr>
                      </tfoot>
                      
                    </table>
                  </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateItem">提交</button>
            </div>
        </div><!-- /.modal-content -->
      </div>
    </div>

    <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">请输入修改信息</h4>
            </div>
            <div class="modal-body">
              <form action="">
                <div class="form-group">
                  <label for="">组号</label>
                  <input type="number" class="form-control" v-model="addItem.userId">
                </div>
                <div class="form-group">
                  <label for="">组名</label>
                  <input type="text" class="form-control" v-model="addItem.userPw">
                </div>
              </form>
              <div class="box">
                  <div class="box-header with-border">
                    <form action="" class="form-inline">
                      <div class="form-group">
                        <label for="">姓名</label>
                        <input type="text" class="form-control" v-model="searchInitText" placeholder="姓名">
                      </div>
                    </form>
                  </div>
                  <div class="box-body">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>工号</th>
                          <th>姓名</th>
                          <th>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="even" role="row" v-for="item in initItems">
                          <td>{{ item.id }}</td>
                          <td>{{ item.name }}</td>
                          <td><input type="checkbox" v-model="item.checked"></td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colspan="1" rowspan="1">工号</th>
                          <th colspan="1" rowspan="1">姓名</th>
                          <th colspan="1" rowspan="1">操作</th>
                        </tr>
                      </tfoot>
                      
                    </table>
                  </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addUser">提交</button>
            </div>
        </div><!-- /.modal-content -->
      </div>
    </div>
      <!-- /.modal -->
  </section>
    <!-- 模态框（Modal） -->
</template>
<script>
export default {
  data() {
    return {
      activeItem: [],
      searchText: '',
      searchInitText: '',
      searchCheckText: '',
      addItem: {
        addUsers: [],
        groupId: '',
        groupName: ''
      }
    }
  },
  computed: {
    groupItems () {
      var self = this
      var key = self.searchText
      return self.$store.getters.getGroupItems.filter(function(item){  return item.groupname.indexOf(key) !== -1
      })
    },
    checkItems () {
      var self = this
      var key = self.searchCheckText
      return self.$store.getters.getCheckItems.filter(function(item){  return item.name.indexOf(key) !== -1
      })
    },
    initItems () {
      var self = this
      var key = self.searchInitText
      return self.$store.getters.getInitItems.filter(function(item){  return item.name.indexOf(key) !== -1
      })
    }
  },
  created: function() {
    var self = this
    self.$http.post('http://localhost:1111/list/loadGroups').then(
        function (response) {
          var data = eval(response.data)
          if (response.data) {
            if (data.success) {
              self.$store.commit('LOAD_GROUP_ITEMS', data.msg)
            } else {
              console.log("failure")
            }
          } else {
            self.response = 'Did not receive a response. Please try again in a few minutes'
          }
        },
        function (response) {
        // error
        // store.commit('TOGGLE_LOADING')
        console.log('Error', response)
        self.response = 'Server appears to be offline'
        self.toggleLoading()
      })
  },
  methods: {
    loadInitItem: function () {
      var self = this
      self.$http.post('http://localhost:1111/list/loadInitUsers').then(
        function (response) {
          var data = eval(response.data)
          if (response.data) {
            if (data.success) {
              self.$store.commit('LOAD_INIT_ITEMS', data.msg)
            } else {
              console.log("failure")
            }
          } else {
            self.response = 'Did not receive a response. Please try again in a few minutes'
          }
        },
        function (response) {
        // error
        // store.commit('TOGGLE_LOADING')
        console.log('Error', response)
        self.response = 'Server appears to be offline'
        self.toggleLoading()
      })
    },
    deleteItem: function (item) {
      this.$store.commit('DELETE_ITEM',item)
      var options = {
        "userName": item.id
      }
      var jsonData = JSON.stringify(options)
      this.$http.post('http://localhost:1111/list/deleteUser', jsonData)
    },
    addUser: function () {
      var self = this
      var jsonData = JSON.stringify(self.addItem)
      self.$http.post('http://localhost:1111/list/addUser', jsonData)
      var newItem = {
        name: self.addItem.userName,
        id: self.addItem.userId,
        title: self.addItem.userTitle,
        openinghours: self.addItem.userTime,
        office: self.addItem.userOffice,
        subject: self.addItem.userSubject,
        project: self.addItem.userProject,
        email: self.addItem.userEmail
      }
      self.$store.commit("ADD_ITEM", newItem)
    },
    updateItem: function () {
      var activeItem = this.activeItem
      var options = {
        "userId": activeItem.id,
        "userName": activeItem.name,
        "userTitle": activeItem.title,
        "userSubject": activeItem.subject,
        "userProject": activeItem.project,
        "userEmail": activeItem.email,
        "userOffice": activeItem.office,
        "userTime": activeItem.openinghours
      }
      var jsonData = JSON.stringify(options)
      console.log(jsonData)
      this.$http.post('http://localhost:1111/list/updateUser', jsonData)
    },
    setItem (item) {
      this.activeItem = item
      var groupId = item.groupid
      var options = {
        "groupId": groupId + ""
      }
      var jsonData = JSON.stringify(options)
      console.log(jsonData)
      this.$http.post('http://localhost:1111/list/loadUsers', jsonData).then(
          function (response) {
            var data = eval(response.data)
            if (response.data) {
              if (data.success) {
                this.$store.commit('LOAD_CHECK_ITEMS', data.msg)
              } else {
                console.log("failure")
              }
            } else {
              self.response = 'Did not receive a response. Please try again in a few minutes'
            }
          },
          function (response) {
          // error
          // store.commit('TOGGLE_LOADING')
            console.log('Error', response)
            self.response = 'Server appears to be offline'
            }
        )
    }
  }
}
</script>
<style>
.content {
  padding-left: 2em;
  padding-top: 3em;
  padding-right: 4em;
}  
</style>
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
                <label for="">姓名</label>
                <input type="text" class="form-control" v-model="searchText" placeholder="姓名">

              <div class="form-group">
                <button data-toggle="modal" data-target="#modal2" class="btn btn-primary">
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
                  <th>工号</th>
                  <th>姓名</th>
                  <th>职称</th>
                  <th>学科</th>
                  <th>研究方向</th>
                  <th>Email</th>
                  <th>办公室</th>
                  <th>接待时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr class="even" role="row" v-for="item in items">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.subject }}</td>
                  <td>{{ item.project }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.office }}</td>
                  <td>{{ item.openinghours }}</td>
                  <td>
                    <button class="btn btn-primary"  data-toggle="modal" data-target="#modal" @click="setItem(item)">修改</button>
                    <button class="btn btn-primary" @click="deleteItem(item)">删除</button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colspan="1" rowspan="1">工号</th>
                  <th colspan="1" rowspan="1">姓名</th>
                  <th colspan="1" rowspan="1">职称</th>
                  <th colspan="1" rowspan="1">学科</th>
                  <th colspan="1" rowspan="1">研究方向</th>
                  <th colspan="1" rowspan="1">Email</th>
                  <th colspan="1" rowspan="1">办公室</th>
                  <th colspan="1" rowspan="1">接待时间</th>
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
                  <label for="">姓名</label>
                  <input type="text" class="form-control" v-model="activeItem.name">
                </div>
                <div class="form-group">
                  <label for="">职称</label>
                  <input type="text" class="form-control" v-model="activeItem.title">
                </div>
                <div class="form-group">
                  <label for="">学科</label>
                  <input type="text" class="form-control" v-model="activeItem.subject">
                </div>
                <div class="form-group">
                  <label for="">研究方向</label>
                  <input type="text" class="form-control" v-model="activeItem.project">
                </div>
                <div class="form-group">
                  <label for="">Email</label>
                  <input type="text" class="form-control" v-model="activeItem.email">
                </div>
                <div class="form-group">
                  <label for="">办公室</label>
                  <input type="text" class="form-control" v-model="activeItem.office">
                </div>
                <div class="form-group">
                  <label for="">接待时间</label>
                  <input type="text" class="form-control" v-model="activeItem.openinghours">
                </div>
              </form>
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
                  <label for="">工号</label>
                  <input type="number" class="form-control" v-model="addItem.userId">
                </div>
                <div class="form-group">
                  <label for="">密码</label>
                  <input type="text" class="form-control" v-model="addItem.userPw">
                </div>
                <div class="form-group">
                  <label for="">姓名</label>
                  <input type="text" class="form-control" v-model="addItem.userName">
                </div>
                <div class="form-group">
                  <label for="">职称</label>
                  <input type="text" class="form-control" v-model="addItem.userTitle">
                </div>
                <div class="form-group">
                  <label for="">学科</label>
                  <input type="text" class="form-control" v-model="addItem.userSubject">
                </div>
                <div class="form-group">
                  <label for="">研究方向</label>
                  <input type="text" class="form-control" v-model="addItem.userProject">
                </div>
                <div class="form-group">
                  <label for="">Email</label>
                  <input type="text" class="form-control" v-model="addItem.userEmail">
                </div>
                <div class="form-group">
                  <label for="">办公室</label>
                  <input type="text" class="form-control" v-model="addItem.userOffice">
                </div>
                <div class="form-group">
                  <label for="">接待时间</label>
                  <input type="text" class="form-control" v-model="addItem.userTime">
                </div>
              </form>
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
      addItem: {
        userName: '',
        userTitle: '',
        userEmail: '',
        userSubject: '',
        userProject: '',
        userOffice: '',
        userTime: '',
        userId: Number,
        userPw: ''
      }
    }
  },
  computed: {
    items () {
      var self = this
      var key = self.searchText
      return self.$store.getters.getItems.filter(function(item){
        return item.name.indexOf(key) !== -1
      })
    }
  },
  created: function() {
    var self = this
    self.$http.post('http://localhost:1111/list/loadList').then(
        function (response) {
          var data = eval(response.data)
          if (response.data) {
            if (data.success) {
              self.$store.commit('LOAD_ITEMS', data.msg)
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
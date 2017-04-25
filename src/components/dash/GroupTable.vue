<template>
    <!-- Main content -->
  <section class="content">
    <div class="row center-block">
        <div class="box box-widget widget-user" style="width: 920px; margin-left: 15px;">
          <div class="widget-user-header bg-aqua-active text-center" style="height: 80px;">
            <h3 class="widget-user-username center-text">测试区块链</h3>
          </div>

          <div class="box-body">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                 <label for="chaincodeUrl" class="col-sm-3 control-label">请输入测试地址</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="chaincodeUrl" />
                </div>
              </div>
              <div class="form-group">
                 <label for="chaincodeId" class="col-sm-3 control-label">请输入测试链编号</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="chaincodeId" />
                </div>
              </div>
              <div class="form-group">
                 <label for="testFrq" class="col-sm-3 control-label">请输入交易生成数(/秒)</label>
                <div class="col-sm-5">
                  <input type="text" class="form-control" id="testFrq" />
                </div>
              </div>
            </form>
            <br>

            <form action="" class="form-inline" align="center">
              <div class="form-group">
                <button class="btn btn-primary">
                  确定
                </button>
              </div>
            </form>
          </div>
          <!-- /.box-header -->
          
          <!-- /.box-body -->
        <!-- /.box -->
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
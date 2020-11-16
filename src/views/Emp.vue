
<template>
  <div id="Emp">
    <table>
      <tr>
        <td>部门编号</td>
        <td>经理编号</td>
        <td>员工编号</td>
        <td>员工姓名</td>
        <td>职务</td>
        <td>薪资</td>
        <td>员工编号</td>
        <td>福利基金</td>
        <td>出生日期</td>
      </tr>

      <tr v-for="item in Emps" :key="item.depno">
        <td>{{ item.depno }}</td>
        <td>{{ item.ename }}</td>
        <td>{{ item.mgr }}</td>
        <td>{{ item.empno }}</td>
        <td>{{ item.ename }}</td>
        <td>{{ item.job }}</td>
        <td>{{ item.sal }}</td>
        <td>{{ item.comm }}</td>
        <td>{{ item.hiredate }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import service from "../static/js/plan-http";
export default {
  name: "Emp",
  data() {
    return {
      Emps: [],
    };
  },

  created() {
    const _this = this;
    this.isLoading = true;
    service({
      url: "/lyfen/demo/v1/searchOrcle",
      method: "GET",
      data: {},
      params: {},
    })
      .then((res) => {
        this.isLoading = false;
        if (res.data.code === "0") {
          this.Emps = res.data.data;
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
</style>

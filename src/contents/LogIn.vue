<template>
    <div class="login_bg">
        <div class="login_wrap">
            <input type="text" placeholder="ID" />
            <input type="password" placeholder="PASSWORD" />
            <label><input type="checkbox"> 아이디 저장</label>
            <RouterLink to="/dash_board">LOGIN</RouterLink>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LogIn',
}
</script>
<style lang="css" scoped>
.login_bg{display:flex;align-items: center;justify-content: center;width:100%;height:100%;
    background: linear-gradient(135deg, #ffd4e1 0%, #c2dcff 100%);
    background-size: 400% 400%;
    animation: colorChange 10s ease infinite;
}
.login_wrap{display: flex;flex-direction: column;gap:6px;align-items: stretch;width:250px;}
.login_wrap input{border:1px solid #fff; height:32px;border-radius: 4px;padding:4px;background: rgba(255,255,255,0.3);}
.login_wrap input::placeholder {
  color: #fff;
  font-size:12px;
}
.login_wrap a{display:flex;align-items: center;justify-content: center;height:32px;border-radius: 4px;background:#783ffd;color:#fff;}
@keyframes colorChange{
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}
.login_wrap label{font-size:12px;}
</style>
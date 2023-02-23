
// 这种叫分别暴露，外面引用得用 {}
export const hunhe = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    // 挂载完就执行
    mounted() {
        console.log("来了老铁")
    }
}

export const hunhe2 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}

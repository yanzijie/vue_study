

import { defineStore } from "pinia"
import { computed,ref } from "vue"

// 第一种创建store仓库的方法, option store
// 第一个参数: dd 类似这个仓库的唯一ID
// 第二个参数可接收两类值: SetUp函数 或 Option 对象, 这个例子我们使用的是Option对象
export const useAgeStore = defineStore('dd', {
    // state类似vue中的data，存储数据，每个仓库有一个state，防止数据污染
    // state是一个函数，保存数据初始状态
    state: ()=>{
        // 使用箭头函数的话, es会进行变量类型推导
        return {
            age:30,
            name:'张三',
            arr:[1,2,3,4]
        }
    },
    // 类似计算属性，用来获取数据
    getters:{
        // 参数state就是 上面state返回的对象数据
        gettersAge(state){
            return state.age + 5
        },

        // 接收外界传进来的值, data就是调用方传进来的数据，调用方需要类似这样写: gettersAge(10)
        /*
        gettersAge(state){
            return (data)=>{
                state.age + data
            }
        },
        * */

        // 也可以这样写, 不用接收state数据
        // gettersAge(){
        //     // this指向store实例, 这样不能进行类型推导
        //     return this.age+5
        // }

        // 访问上面gettersAge返回的数据, 不能写箭头函数
        gettersName(state){
            return this.gettersAge + " and " + state.name
        },

        // 访问其他store身上的getters
        gettersOtherStore(state){
            // 定义出来使用就行
            const counterStore = useCounter()
            return state.age + counterStore.gettersCounter
        }
    },
    // 类似 methods，定义方法
    actions:{
        addAge(){
            // this指向对应的store仓库
            this.age++
        }
    }
})

// 第二种创建store仓库的方法, setup store
// setup(){}
export const useCounter = defineStore('main', ()=>{
    // counter相当于定义在里state里面
    const counter = ref(30)

    // 计算属性, 简单写法
    const gettersCounter = computed(()=>{
        return counter.value + 5;
    })

    // methods，actions
    function addCounter(){
        counter.value++
    }

    return {
        counter,
        gettersCounter,
        addCounter
    }
})



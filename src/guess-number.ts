import * as readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';

class Game {
    private num: number = 0;
    private rl: any;
    /**
     * 构造函数中生成随机数
     */
    constructor(){
        this.num = Math.ceil(Math.random() * 100 + 1);
    }
    /**
     * 开始游戏
     */
    start(){
        this.guess();
    }
    /**
     * 创建readline资源
     */
    private connect(){
        if(undefined == this.rl){
            this.rl = readline.createInterface({ input, output });
        }
    }
    /**
     * 猜数字游戏
     */
    private guess(){
        this.connect();
        this.rl.question('请输入一个数字：', (answer: any) => {
            answer = parseInt(answer);
            if(isNaN(answer)){
                console.info("请输入数字！");
                this.guess();
                return ;
            }
            console.info(`输入数字为:${answer}`);
            let inNum: number = <number>answer;
            if(this.num < inNum){
                console.info("请输入的数字太大了！");
                // 再猜
                this.guess();
            }else if(this.num > inNum){
                console.info("请输入的数字太小了！");
                 // 再猜
                this.guess();
            }else{
                console.info("恭喜您，猜中了！！！");
                 // 猜中退出
                this.exit();
            }
        });
    }
    /**
     * 关闭readline资源
     */
    private exit(){
        this.rl.close();
    }
}

let game = new Game();
game.start();
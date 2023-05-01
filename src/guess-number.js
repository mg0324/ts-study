"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var node_process_1 = require("node:process");
var Game = /** @class */ (function () {
    /**
     * 构造函数中生成随机数
     */
    function Game() {
        this.num = 0;
        this.num = Math.ceil(Math.random() * 100 + 1);
    }
    /**
     * 开始游戏
     */
    Game.prototype.start = function () {
        this.guess();
    };
    /**
     * 创建readline资源
     */
    Game.prototype.connect = function () {
        if (undefined == this.rl) {
            this.rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
        }
    };
    /**
     * 猜数字游戏
     */
    Game.prototype.guess = function () {
        var _this = this;
        this.connect();
        this.rl.question('请输入一个数字：', function (answer) {
            answer = parseInt(answer);
            if (isNaN(answer)) {
                console.info("请输入数字！");
                _this.guess();
                return;
            }
            console.info("\u8F93\u5165\u6570\u5B57\u4E3A:".concat(answer));
            var inNum = answer;
            if (_this.num < inNum) {
                console.info("请输入的数字太大了！");
                // 再猜
                _this.guess();
            }
            else if (_this.num > inNum) {
                console.info("请输入的数字太小了！");
                // 再猜
                _this.guess();
            }
            else {
                console.info("恭喜您，猜中了！！！");
                // 猜中退出
                _this.exit();
            }
        });
    };
    /**
     * 关闭readline资源
     */
    Game.prototype.exit = function () {
        this.rl.close();
    };
    return Game;
}());
var game = new Game();
game.start();

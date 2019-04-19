Page({
    data: {
        basics: 0,
        numList: [{
            name: '实名认证'
        }, {
            name: '学生认证'
        }, {
            name: '完成'
        },],
        num: 0,
        scroll: 0
    },
    basicsSteps() {
        this.setData({
            basics: this.data.basics == this.data.basicsList.length - 1 ? 0 : this.data.basics + 1
        })
    },
    numSteps() {
        this.setData({
            num: this.data.num == this.data.numList.length - 1 ? 0 : this.data.num + 1
        })
    },
    scrollSteps() {
        this.setData({
            scroll: this.data.scroll == 9 ? 0 : this.data.scroll + 1
        })
    }
})
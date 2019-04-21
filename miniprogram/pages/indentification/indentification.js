const app = getApp();

Page({
    data: {
        index: null,
        multiIndex: [0, 0, 0],
        imgList: [],
        basics: 0,
        scroll: 0
    },
    basicsSteps() {
        this.setData({
            basics: this.data.basics == this.data.basicsList.length - 1 ? 0 : this.data.basics + 1
        })
    },


    //验证 提交到数据库
    submit() {
        wx.showModal({
            title: '',
            content: '确定提交信息？',
            cancelText: '否',
            confirmText: '是',
            success: res => {
             
            }
        })
    },

   
    ViewImage(e) {
        wx.previewImage({
            urls: this.data.imgList,
            current: e.currentTarget.dataset.url
        });
    },
    ChooseImage() {
        wx.chooseImage({
            count: 2, //默认9
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album'], //从相册选择
            success: (res) => {
                if (this.data.imgList.length != 0) {
                    this.setData({
                        imgList: this.data.imgList.concat(res.tempFilePaths)
                    })
                } else {
                    this.setData({
                        imgList: res.tempFilePaths
                    })
                }
            }
        });
    },
    DelImg(e) {
        wx.showModal({
            title: '',
            content: '确定要删除这张照片？',
            cancelText: '否',
            confirmText: '是',
            success: res => {
                if (res.confirm) {
                    this.data.imgList.splice(e.currentTarget.dataset.index, 1);
                    this.setData({
                        imgList: this.data.imgList
                    })
                }
            }
        })
    },
})
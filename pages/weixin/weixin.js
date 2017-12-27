Page({
  data: {
    inputShowed: false,
    inputVal: "",
    Text:[
      {name:'cc',text:'hmyana',img:'../images/03.png'},
      { name: 'zz', text: 'cc' ,img:'../images/01.png'}
    ] 
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
});





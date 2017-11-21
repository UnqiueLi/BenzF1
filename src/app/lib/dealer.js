var dealer_arr = [
    {
        "province": "安徽",
        "city": "亳州",
        "dealer": "亳州之星汽车有限公司"
    },
    {
        "province": "安徽",
        "city": "阜阳",
        "dealer": "阜阳伟久汽车销售服务有限公司"
    },
    {
        "province": "安徽",
        "city": "合肥",
        "dealer": "安徽伟恒东驰汽车销售服务有限公司"
    },
    {
        "province": "安徽",
        "city": "淮南",
        "dealer": "淮南之星汽车销售服务有限公司"
    },
    {
        "province": "安徽",
        "city": "芜湖",
        "dealer": "芜湖国贸汽车销售服务有限公司"
    },
    {
        "province": "安徽",
        "city": "宣城",
        "dealer": "宣城利星汽车销售服务有限公司"
    },
    {
        "province": "北京",
        "city": "北京",
        "dealer": "北京德奥达汽车进出口有限公司"
    },
    {
        "province": "北京",
        "city": "北京",
        "dealer": "北京福瑞之星汽车销售服务有限公司"
    },
    {
        "province": "北京",
        "city": "北京",
        "dealer": "北京庞大兴驰汽车科技有限公司"
    },
    {
        "province": "重庆",
        "city": "重庆",
        "dealer": "重庆百事达华雍汽车销售服务有限公司"
    },
    {
        "province": "福建",
        "city": "福州",
        "dealer": "福建中升汽车服务有限公司"
    },
    {
        "province": "福建",
        "city": "宁德",
        "dealer": "宁德宝利德汽车有限公司"
    },
    {
        "province": "福建",
        "city": "莆田",
        "dealer": "莆田之星汽车有限公司"
    },
    {
        "province": "福建",
        "city": "泉州",
        "dealer": "泉州之星汽车销售服务有限公司"
    },
    {
        "province": "福建",
        "city": "厦门",
        "dealer": "厦门中升汇驰汽车销售服务有限公司"
    },
    {
        "province": "甘肃",
        "city": "兰州",
        "dealer": "兰州庞大兴驰汽车销售服务有限公司"
    },
    {
        "province": "广东",
        "city": "东莞",
        "dealer": "东莞中升之星汽车销售服务有限公司"
    },
    {
        "province": "广东",
        "city": "东莞",
        "dealer": "东莞泰雄星汽车销售服务有限公司"
    },
    {
        "province": "广东",
        "city": "佛山",
        "dealer": "佛山中升之星汽车销售服务有限公司"
    },
    {
        "province": "广东",
        "city": "佛山",
        "dealer": "佛山泰雄星汽车维修有限公司"
    },
    {
        "province": "广东",
        "city": "广州",
        "dealer": "广州鸿粤星驰汽车销售服务有限公司"
    },
    {
        "province": "广东",
        "city": "惠州",
        "dealer": "惠州仁孚汽车服务有限公司"
    },
    {
        "province": "广东",
        "city": "茂名",
        "dealer": "茂名惠通之星汽车销售服务有限公司"
    },
    {
        "province": "广东",
        "city": "汕头",
        "dealer": "汕头市骏荣汽车销售服务有限公司"
    },
    {
        "province": "广东",
        "city": "深圳",
        "dealer": "深圳中升之星汽车销售服务有限公司"
    },
    {
        "province": "广东",
        "city": "深圳",
        "dealer": "深圳中升星辉汽车销售服务有限公司"
    },
    {
        "province": "广东",
        "city": "深圳",
        "dealer": "深圳市仁孚特力汽车服务有限公司"
    },
    {
        "province": "广东",
        "city": "深圳",
        "dealer": "深圳中升汇驰汽车销售服务有限公司"
    },
    {
        "province": "广东",
        "city": "中山",
        "dealer": "佛山泰雄星汽车维修有限公司中山分公司"
    },
    {
        "province": "广东",
        "city": "珠海",
        "dealer": "珠海仁孚汽车销售服务有限公司"
    },
    {
        "province": "广西",
        "city": "北海",
        "dealer": "北海弘之星汽车销售服务有限公司"
    },
    {
        "province": "广西",
        "city": "桂林",
        "dealer": "桂林龙星行汽车销售服务有限公司"
    },
    {
        "province": "广西",
        "city": "南宁",
        "dealer": "南宁恒信驰远汽车销售服务有限公司"
    },
    {
        "province": "贵州",
        "city": "贵阳",
        "dealer": "贵州金星汽车销售服务有限公司"
    },
    {
        "province": "贵州",
        "city": "遵义",
        "dealer": "遵义仁孚汽车服务有限公司"
    },
    {
        "province": "海南",
        "city": "海口",
        "dealer": "海南南星汽车销售服务有限公司"
    },
    {
        "province": "海南",
        "city": "三亚",
        "dealer": "海南南星汽车销售服务有限公司三亚分公司"
    },
    {
        "province": "河北",
        "city": "保定",
        "dealer": "保定极致汽车销售服务有限公司"
    },
    {
        "province": "河北",
        "city": "沧州",
        "dealer": "利星行（沧州）汽车销售服务有限公司"
    },
    {
        "province": "河北",
        "city": "邯郸",
        "dealer": "邯郸市庞大乐业汽车销售服务有限公司"
    },
    {
        "province": "河北",
        "city": "衡水",
        "dealer": "衡水庞大之星汽车销售服务有限公司"
    },
    {
        "province": "河北",
        "city": "廊坊",
        "dealer": "三河波士智达汽车销售服务有限公司"
    },
    {
        "province": "河北",
        "city": "廊坊",
        "dealer": "廊坊利星行汽车销售服务有限公司"
    },
    {
        "province": "河北",
        "city": "秦皇岛",
        "dealer": "利星行（秦皇岛）汽车销售有限公司"
    },
    {
        "province": "河北",
        "city": "石家庄",
        "dealer": "石家庄庞大兴驰汽车销售服务有限公司"
    },
    {
        "province": "河北",
        "city": "唐山",
        "dealer": "唐山市冀东之星汽车销售服务有限公司"
    },
    {
        "province": "河北",
        "city": "邢台",
        "dealer": "邢台市庞大之星汽车销售服务有限公司"
    },
    {
        "province": "河南",
        "city": "洛阳",
        "dealer": "洛阳驰星汽车销售有限公司"
    },
    {
        "province": "河南",
        "city": "南阳",
        "dealer": "南阳市庞大润星汽车销售服务有限公司"
    },
    {
        "province": "河南",
        "city": "平顶山",
        "dealer": "平顶山利星汽车销售有限公司"
    },
    {
        "province": "河南",
        "city": "新乡",
        "dealer": "新乡市利星汽车销售有限公司"
    },
    {
        "province": "河南",
        "city": "信阳",
        "dealer": "信阳利星汽车销售有限公司"
    },
    {
        "province": "河南",
        "city": "许昌",
        "dealer": "许昌利星汽车销售有限公司"
    },
    {
        "province": "河南",
        "city": "郑州",
        "dealer": "郑州驰星汽车销售服务有限公司"
    },
    {
        "province": "河南",
        "city": "郑州",
        "dealer": "郑州驰星汽车销售服务有限公司"
    },
    {
        "province": "黑龙江",
        "city": "大庆",
        "dealer": "大庆之星汽车有限公司"
    },
    {
        "province": "黑龙江",
        "city": "哈尔滨",
        "dealer": "黑龙江北驰汽车销售服务有限公司"
    },
    {
        "province": "黑龙江",
        "city": "哈尔滨",
        "dealer": "黑龙江北驰汽车销售服务有限公司"
    },
    {
        "province": "黑龙江",
        "city": "绥化",
        "dealer": "绥化市庞大之星汽车销售服务有限公司"
    },
    {
        "province": "黑龙江",
        "city": "佳木斯",
        "dealer": "佳木斯利星汽车有限公司"
    },
    {
        "province": "湖北",
        "city": "黄冈",
        "dealer": "黄冈恒信之星汽车销售服务有限公司"
    },
    {
        "province": "湖北",
        "city": "十堰",
        "dealer": "十堰鹏贤汽车销售服务有限公司"
    },
    {
        "province": "湖北",
        "city": "武汉",
        "dealer": "武汉康顺华驰汽车销售服务有限公司"
    },
    {
        "province": "湖北",
        "city": "武汉",
        "dealer": "武汉正通悦驰汽车销售服务有限公司"
    },
    {
        "province": "湖北",
        "city": "襄阳",
        "dealer": "襄阳恒信之星汽车销售服务有限公司"
    },
    {
        "province": "湖北",
        "city": "宜昌",
        "dealer": "宜昌恒信之星汽车销售服务有限公司"
    },
    {
        "province": "湖南",
        "city": "常德",
        "dealer": "常德仁孚汽车服务有限公司"
    },
    {
        "province": "湖南",
        "city": "长沙",
        "dealer": "湖南天驰汽车贸易有限公司"
    },
    {
        "province": "湖南",
        "city": "娄底",
        "dealer": "娄底宝利德汽车有限公司"
    },
    {
        "province": "湖南",
        "city": "邵阳",
        "dealer": "邵阳市大昌行汽车销售服务有限公司"
    },
    {
        "province": "湖南",
        "city": "湘潭",
        "dealer": "湘潭鸿粤凯泰汽车销售服务有限公司"
    },
    {
        "province": "湖南",
        "city": "株洲",
        "dealer": "株洲溢华汽车销售服务有限公司"
    },
    {
        "province": "吉林",
        "city": "长春",
        "dealer": "长春友驰汽车销售服务有限公司"
    },
    {
        "province": "吉林",
        "city": "长春",
        "dealer": "长春之星汽车有限公司"
    },
    {
        "province": "吉林",
        "city": "延边",
        "dealer": "延吉市庞大之星汽车销售服务有限公司"
    },
    {
        "province": "江苏",
        "city": "常州",
        "dealer": "常州东方驰达汽车销售服务有限公司"
    },
    {
        "province": "江苏",
        "city": "淮安",
        "dealer": "淮安万帮金星汽车销售有限公司"
    },
    {
        "province": "江苏",
        "city": "连云港",
        "dealer": "连云港之星汽车销售有限公司"
    },
    {
        "province": "江苏",
        "city": "南京",
        "dealer": "南京宝铁龙坤驰汽车有限公司"
    },
    {
        "province": "江苏",
        "city": "南通",
        "dealer": "南通宝铁龙汽车销售服务有限公司"
    },
    {
        "province": "江苏",
        "city": "苏州",
        "dealer": "苏州宝铁龙之星汽车有限公司"
    },
    {
        "province": "江苏",
        "city": "泰州",
        "dealer": "泰州永驰汽车销售有限公司"
    },
    {
        "province": "江苏",
        "city": "无锡",
        "dealer": "无锡市东方润驰汽车销售服务有限公司"
    },
    {
        "province": "江苏",
        "city": "徐州",
        "dealer": "徐州润东嘉驰汽车销售服务有限公司"
    },
    {
        "province": "江苏",
        "city": "盐城",
        "dealer": "盐城市鹏龙森风汽车有限公司"
    },
    {
        "province": "江苏",
        "city": "盐城",
        "dealer": "盐城之星汽车有限公司"
    },
    {
        "province": "江苏",
        "city": "扬州",
        "dealer": "扬州利之星汽车维修服务有限公司"
    },
    {
        "province": "江苏",
        "city": "镇江",
        "dealer": "丹阳之星汽车零部件有限公司"
    },
    {
        "province": "江西",
        "city": "赣州",
        "dealer": "赣州华宏星汽车有限公司"
    },
    {
        "province": "江西",
        "city": "吉安",
        "dealer": "赣州华宏星汽车有限公司吉安分公司"
    },
    {
        "province": "江西",
        "city": "南昌",
        "dealer": "南昌中升之星汽车销售服务有限公司"
    },
    {
        "province": "江西",
        "city": "南昌",
        "dealer": "泰雄星（南昌）汽车销售服务有限公司"
    },
    {
        "province": "江西",
        "city": "新余",
        "dealer": "新余之星汽车服务有限公司"
    },
    {
        "province": "辽宁",
        "city": "大连",
        "dealer": "大连中升汇驰汽车销售服务有限公司"
    },
    {
        "province": "辽宁",
        "city": "锦州",
        "dealer": "锦州之星汽车有限公司"
    },
    {
        "province": "辽宁",
        "city": "辽阳",
        "dealer": "辽阳业乔宏星汽车销售服务有限公司"
    },
    {
        "province": "辽宁",
        "city": "盘锦",
        "dealer": "盘锦之星汽车有限公司"
    },
    {
        "province": "辽宁",
        "city": "沈阳",
        "dealer": "沈阳中升骏驰汽车销售服务有限公司"
    },
    {
        "province": "辽宁",
        "city": "营口",
        "dealer": "营口之星汽车有限公司"
    },
    {
        "province": "内蒙古",
        "city": "包头",
        "dealer": "内蒙古奥捷之星汽车销售服务有限公司"
    },
    {
        "province": "内蒙古",
        "city": "包头",
        "dealer": "包头中升之星汽车销售服务有限公司"
    },
    {
        "province": "内蒙古",
        "city": "赤峰",
        "dealer": "赤峰市庞大之星汽车销售服务有限公司"
    },
    {
        "province": "内蒙古",
        "city": "呼伦贝尔",
        "dealer": "内蒙古庞大驰兴汽车销售服务有限公司"
    },
    {
        "province": "内蒙古",
        "city": "呼伦贝尔",
        "dealer": "呼伦贝尔利星汽车销售服务有限公司"
    },
    {
        "province": "内蒙古",
        "city": "鄂尔多斯",
        "dealer": "鄂尔多斯之星汽车有限公司"
    },
    {
        "province": "内蒙古",
        "city": "通辽",
        "dealer": "通辽市庞大之星汽车销售服务有限公司"
    },
    {
        "province": "宁夏",
        "city": "银川",
        "dealer": "银川庞大兴驰汽车销售服务有限公司"
    },
    {
        "province": "青海",
        "city": "西宁",
        "dealer": "青海之星汽车有限公司"
    },
    {
        "province": "山东",
        "city": "滨州",
        "dealer": "滨州泰岳星徽汽车有限公司"
    },
    {
        "province": "山东",
        "city": "滨州",
        "dealer": "利星行(滨州)汽车销售服务有限公司"
    },
    {
        "province": "山东",
        "city": "德州",
        "dealer": "德州市庞大之星汽车销售服务有限公司"
    },
    {
        "province": "山东",
        "city": "东营",
        "dealer": "东营泰岳星徽汽车有限公司"
    },
    {
        "province": "山东",
        "city": "东营",
        "dealer": "东营五岳星徽汽车有限公司"
    },
    {
        "province": "山东",
        "city": "菏泽",
        "dealer": "菏泽之星汽车服务有限公司"
    },
    {
        "province": "山东",
        "city": "济南",
        "dealer": "山东永驰汽车销售服务有限公司"
    },
    {
        "province": "山东",
        "city": "济南",
        "dealer": "山东永驰汽车销售服务有限公司（展厅）"
    },
    {
        "province": "山东",
        "city": "济宁",
        "dealer": "济宁星驰汽车销售服务有限公司"
    },
    {
        "province": "山东",
        "city": "聊城",
        "dealer": "聊城欧龙汽车有限公司"
    },
    {
        "province": "山东",
        "city": "临沂",
        "dealer": "临沂恒润汽车销售服务有限公司"
    },
    {
        "province": "山东",
        "city": "青岛",
        "dealer": "青岛恒润汽车销售服务有限公司"
    },
    {
        "province": "山东",
        "city": "青岛",
        "dealer": "青岛恒润汽车销售服务有限公司市南分公司"
    },
    {
        "province": "山东",
        "city": "泰安",
        "dealer": "泰安市庞大之星汽车销售服务有限公司"
    },
    {
        "province": "山东",
        "city": "潍坊",
        "dealer": "潍坊恒润汽车销售服务有限公司"
    },
    {
        "province": "山东",
        "city": "威海",
        "dealer": "威海之星汽车服务有限公司"
    },
    {
        "province": "山东",
        "city": "烟台",
        "dealer": "烟台恒润汽车销售服务有限公司"
    },
    {
        "province": "山东",
        "city": "枣庄",
        "dealer": "枣庄之星汽车销售服务有限公司"
    },
    {
        "province": "山东",
        "city": "淄博",
        "dealer": "淄博汇驰汽车销售服务有限公司"
    },
    {
        "province": "山西",
        "city": "大同",
        "dealer": "山西必高之星汽车销售服务有限公司"
    },
    {
        "province": "山西",
        "city": "临汾",
        "dealer": "临汾市奥驰汽车贸易有限公司"
    },
    {
        "province": "山西",
        "city": "太原",
        "dealer": "山西德驰汽车销售服务有限公司"
    },
    {
        "province": "山西",
        "city": "阳泉",
        "dealer": "阳泉市庞大乐业汽车销售服务有限公司"
    },
    {
        "province": "陕西",
        "city": "宝鸡",
        "dealer": "西安之星汽车有限公司宝鸡分公司"
    },
    {
        "province": "陕西",
        "city": "渭南",
        "dealer": "西安利之星汽车有限公司渭南分公司"
    },
    {
        "province": "陕西",
        "city": "西安",
        "dealer": "西安庞大兴驰汽车销售服务有限公司"
    },
    {
        "province": "陕西",
        "city": "咸阳",
        "dealer": "咸阳市庞大之星汽车销售服务有限公司"
    },
    {
        "province": "陕西",
        "city": "榆林",
        "dealer": "榆林市庞大乐业汽车销售服务有限公司"
    },
    {
        "province": "上海",
        "city": "上海",
        "dealer": "上海闵星汽车服务有限公司"
    },
    {
        "province": "上海",
        "city": "上海",
        "dealer": "上海银佳汽车销售服务有限公司"
    },
    {
        "province": "上海",
        "city": "上海",
        "dealer": "上海德骏汽车有限公司"
    },
    {
        "province": "上海",
        "city": "上海",
        "dealer": "上海德骏汽车有限公司闵行分公司"
    },
    {
        "province": "四川",
        "city": "成都",
        "dealer": "四川福奔汽车贸易有限公司"
    },
    {
        "province": "四川",
        "city": "德阳",
        "dealer": "德阳华星锦业汽车销售服务有限公司"
    },
    {
        "province": "四川",
        "city": "乐山",
        "dealer": "乐山华星锦业汽车销售服务有限公司"
    },
    {
        "province": "四川",
        "city": "绵阳",
        "dealer": "绵阳华星锦业汽车销售服务有限公司"
    },
    {
        "province": "四川",
        "city": "南充",
        "dealer": "南充华星锦业汽车销售服务有限公司"
    },
    {
        "province": "四川",
        "city": "宜宾",
        "dealer": "宜宾仁孚汽车服务有限公司"
    },
    {
        "province": "天津",
        "city": "天津",
        "dealer": "天津平治汽车贸易有限公司"
    },
    {
        "province": "西藏",
        "city": "拉萨",
        "dealer": "拉萨庞大兴驰汽车销售服务有限公司"
    },
    {
        "province": "新疆",
        "city": "乌鲁木齐",
        "dealer": "乌鲁木齐庞大兴驰汽车销售服务有限公司"
    },
    {
        "province": "新疆",
        "city": "伊犁",
        "dealer": "新疆天汇汇驰汽车销售服务有限公司"
    },
    {
        "province": "云南",
        "city": "昆明",
        "dealer": "昆明中升汇驰汽车销售服务有限公司"
    },
    {
        "province": "浙江",
        "city": "杭州",
        "dealer": "浙江九华汽车有限公司"
    },
    {
        "province": "浙江",
        "city": "杭州",
        "dealer": "杭州九华汽车有限公司"
    },
    {
        "province": "浙江",
        "city": "湖州",
        "dealer": "湖州九和汽车有限公司"
    },
    {
        "province": "浙江",
        "city": "嘉兴",
        "dealer": "嘉兴九华汽车有限公司"
    },
    {
        "province": "浙江",
        "city": "金华",
        "dealer": "金华九华汽车有限公司"
    },
    {
        "province": "浙江",
        "city": "宁波",
        "dealer": "宁波九华汽车有限公司"
    },
    {
        "province": "浙江",
        "city": "衢州",
        "dealer": "衢州欧龙汽车有限公司"
    },
    {
        "province": "浙江",
        "city": "绍兴",
        "dealer": "绍兴九华汽车有限公司"
    },
    {
        "province": "浙江",
        "city": "温州",
        "dealer": "温州之星汽车有限公司"
    },
    {
        "province": "浙江",
        "city": "温州",
        "dealer": "温州尊驰汽车销售有限公司 "
    },
    {
        "province": "浙江",
        "city": "舟山",
        "dealer": "舟山利星汽车销售服务有限公司"
    }
];

var plan_arr = ['3个月以内', '4-6个月以内', '6-12个月以内', '12个月以后', '无计划'];
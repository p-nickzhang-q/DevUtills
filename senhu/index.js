var data = {
    "typeCode": {
        "type": "string",
        "x-swaggering-mongoose": {
            "index": {
                "unique": true
            }
        },
        "description": "规格代码"
    },
    "typeName": {
        "type": "string",
        "description": "规格名称"
    },
    "materials": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "materialId": {
                    "type": "string",
                    "x-db-tablename": "Material",
                    "description": "材料id"
                },
                "proportion": {
                    "type": "number",
                    "format": "double",
                    "description": "占比"
                }
            },
            "description": "原料"
        }
    },
    "materials_info_theoretical_components": {
        "type": "string",
        "description": "理论成分"
    },
    "materials_info_actual_components": {
        "type": "string",
        "description": "实测成分"
    },
    "materials_info_wastage_rate": {
        "type": "number",
        "format": "double",
        "description": "损耗率"
    },
    "materials_lower_weight": {
        "type": "number",
        "format": "double",
        "description": "下机克重(公式+1.5)"
    },
    "materials_info_weight_of_finished_product": {
        "type": "number",
        "format": "double",
        "description": "成品克重"
    },
    "materials_li_lun_cai_liao_cheng_ben": {
        "type": "number",
        "format": "double",
        "description": "理论材料成本"
    },
    "materials_shi_ji_cai_liao_cheng_ben": {
        "type": "number",
        "format": "double",
        "description": "实际材料成本"
    },
    "weavingProcessId": {
        "type": "string",
        "x-db-tablename": "WeavingProcess",
        "description": "织造工艺id"
    },
    "weavingProcess_huaxing": {
        "type": "string",
        "description": "花型"
    },
    "weavingProcess_luokou_type": {
        "type": "string",
        "description": "罗口类型"
    },
    "weavingProcess_luokou_hengla": {
        "type": "number",
        "format": "double",
        "description": "罗口横拉"
    },
    "weavingProcess_shangtong_hengla": {
        "type": "number",
        "format": "double",
        "description": "上筒横拉"
    },
    "weavingProcess_shangtong_zhila": {
        "type": "number",
        "format": "double",
        "description": "上筒直拉"
    },
    "weavingProcess_wadi_hengla": {
        "type": "number",
        "format": "double",
        "description": "袜底横拉"
    },
    "weavingProcess_wadi_zhila": {
        "type": "number",
        "format": "double",
        "description": "袜底直拉"
    },
    "seamhead": {
        "type": "object",
        "properties": {
            "process": {
                "type": "string",
                "enum": [
                    "直缝",
                    "仿手工",
                    "手工"
                ],
                "description": "缝头工艺"
            },
        },
        "description": "缝头"
    },
    "dingxing": {
        "type": "object",
        "properties": {
            "waban": {
                "type": "number",
                "format": "double",
                "description": "袜版"
            },
            "need_pi_quan": {
                "type": "boolean",
                "description": "是否需要皮圈"
            },
            "yin_xing_wa_dian_jiao": {
                "type": "string",
                "description": "隐形袜点胶"
            },
            "ding_xing_shi_chang": {
                "type": "number",
                "format": "double",
                "description": "定型时长"
            },
            "ding_xing_wen_du": {
                "type": "number",
                "format": "double",
                "description": "定型温度"
            },
            "shangtongLength": {
                "type": "number",
                "format": "double",
                "description": "上筒长度"
            },
            "xiatongLength": {
                "type": "number",
                "format": "double",
                "description": "下筒长度"
            },
            "luokouLength": {
                "type": "number",
                "format": "double",
                "description": "罗口长度"
            },
            "luokouWidth": {
                "type": "number",
                "format": "double",
                "description": "罗口宽度"
            }
        },
        "description": "定型"
    },
    "device_info": {
        "type": "object",
        "properties": {
            "shang_tong_quan_shu_wh": {
                "type": "number",
                "format": "double",
                "description": "上筒圈数(无花型)"
            },
            "shang_tong_zhuan_su_wh": {
                "type": "number",
                "format": "double",
                "description": "上筒转速(无花型)"
            },
            "shang_tong_quan_shu_yh": {
                "type": "number",
                "format": "double",
                "description": "上筒圈数(有花型)"
            },
            "shang_tong_zhuan_su_yh": {
                "type": "number",
                "format": "double",
                "description": "上筒转速(有花型)"
            },
            "shang_tong_shi_chang": {
                "type": "number",
                "format": "double",
                "description": "上筒时长"
            },
            "xia_tong_quan_shu": {
                "type": "number",
                "format": "double",
                "description": "下筒圈数"
            },
            "xia_tong_zhuan_zu_wh": {
                "type": "number",
                "format": "double",
                "description": "下筒转速(无花型)"
            },
            "xia_tong_quan_shu_wh": {
                "type": "number",
                "format": "double",
                "description": "下筒圈数(无花型)"
            },
            "xia_tong_zhuan_zu_yh": {
                "type": "number",
                "format": "double",
                "description": "下筒转速(有花型)"
            },
            "xia_tong_shi_chang": {
                "type": "number",
                "format": "double",
                "description": "下筒时长"
            },
            "li_kou_quan_shu": {
                "type": "number",
                "format": "double",
                "description": "里口圈数"
            },
            "luo_kou_quan_shu": {
                "type": "number",
                "format": "double",
                "description": "罗口圈数"
            },
            "zhuan_su_wh": {
                "type": "number",
                "format": "double",
                "description": "转速(无花型)"
            },
            "quan_shu_yh": {
                "type": "number",
                "format": "double",
                "description": "圈数(有花型)"
            },
            "zhuan_su_yh": {
                "type": "number",
                "format": "double",
                "description": "转速(有花型)"
            },
            "luo_kou_shi_chang": {
                "type": "number",
                "format": "double",
                "description": "罗口时长"
            },
            "hou_gen_quan_shu": {
                "type": "number",
                "format": "double",
                "description": "后跟圈数"
            },
            "hou_gen_zhen_shu": {
                "type": "number",
                "format": "double",
                "description": "后跟针数"
            },
            "hou_gen_zhuan_su": {
                "type": "number",
                "format": "double",
                "description": "后跟转速"
            },
            "hou_gen_shi_chang": {
                "type": "number",
                "format": "double",
                "description": "后跟时长"
            },
            "wa_jian_quan_shu": {
                "type": "number",
                "format": "double",
                "description": "袜尖圈数"
            },
            "wa_jian_zhuan_su": {
                "type": "number",
                "format": "double",
                "description": "袜尖转速"
            },
            "wa_jian_shi_chang": {
                "type": "number",
                "format": "double",
                "description": "袜尖时长"
            },
            "guo_qiao_quan_shu": {
                "type": "number",
                "format": "double",
                "description": "过桥圈数"
            },
            "guo_qiao_zhuan_su": {
                "type": "number",
                "format": "double",
                "description": "过桥转速"
            },
            "guo_qiao_shi_chang": {
                "type": "number",
                "format": "double",
                "description": "过桥时长"
            },
            "ji_tou_xian_quan_shu": {
                "type": "number",
                "format": "double",
                "description": "机头线圈数"
            },
            "ji_tou_xian_zhuan_su": {
                "type": "number",
                "format": "double",
                "description": "机头线转速"
            },
            "ji_tou_xian_shi_chang": {
                "type": "number",
                "format": "double",
                "description": "机头线时长"
            },
            "xiang_jin_quan_shu": {
                "type": "number",
                "format": "double",
                "description": "橡筋圈数"
            },
            "zong_shi_chang": {
                "type": "number",
                "format": "double",
                "description": "总时长(理论)"
            },
            "dam_zhi_wa_zi_sheng_can_shi_jian": {
                "type": "number",
                "format": "double",
                "description": "单只袜子生产时间(实际)"
            }
        },
        "description": "袜机"
    },
    "cost_accounting": {
        "type": "object",
        "properties": {
            "ji_chu_jia_gong_fei": {
                "type": "number",
                "format": "double",
                "description": "基础加工费(织造)"
            },
            "te_shu_gong_yi_ming_cheng": {
                "type": "string",
                "description": "特殊工艺名称"
            },
            "te_shu_gong_yi_jia_gong_fei": {
                "type": "number",
                "format": "double",
                "description": "特殊工艺加工费"
            },
            "shi_jie_jia_gong_fei_jc_gy": {
                "type": "number",
                "format": "double",
                "description": "实际加工费(基础+工艺)"
            },
            "shi_ji_jia_gong_fei_zj": {
                "type": "number",
                "format": "double",
                "description": "实际加工费(诸暨)"
            },
            "li_lun_feng_tou_fei": {
                "type": "number",
                "format": "double",
                "description": "理论缝头费"
            },
            "shi_ji_feng_tou_fei": {
                "type": "number",
                "format": "double",
                "description": "实际缝头费"
            },
            "li_lun_ding_xing_fei": {
                "type": "number",
                "format": "double",
                "description": "理论定型费"
            },
            "shi_ji_ding_xing_fei": {
                "type": "number",
                "format": "double",
                "description": "实际定型费"
            },
            "tao_ban_fei": {
                "type": "number",
                "format": "double",
                "description": "套版/套版费"
            },
            "ding_biao_fei": {
                "type": "number",
                "format": "double",
                "description": "定标费"
            },
            "he_suan_jia": {
                "type": "number",
                "format": "double",
                "description": "核算价"
            },
            "jun_zhi": {
                "type": "number",
                "format": "double",
                "description": "均值"
            },
            "zui_gao_zhi": {
                "type": "number",
                "format": "double",
                "description": "最高值"
            },
            "shi_ji_chu_chang_jia": {
                "type": "number",
                "format": "double",
                "description": "实际出厂价(放单公司成本)"
            },
            "cheng_ben_jia": {
                "type": "number",
                "format": "double",
                "description": "成本价(采购成本价/OA成本价)"
            },
            "jie_suan_jia": {
                "type": "number",
                "format": "double",
                "description": "结算价"
            },
            "nei_bu_jie_suan_jia": {
                "type": "number",
                "format": "double",
                "description": "内部结算价(运营成本)"
            }
        },
        "description": "成本"
    }
}

var plMap = {};

genarate(data, plMap);

function genarate(data, plMap, parent) {
    Object.keys(data).forEach(k => {
        switch (data[k].type) {
            case 'object':
                genarate(data[k].properties, plMap, data[k].description)
                break;
            case 'array':

                break;

            default:
                if (parent) {
                    plMap[k] = `${parent}_${data[k].description}`;
                } else {
                    plMap[k] = data[k].description
                }
                break;
        }
    });
}

console.log(JSON.stringify(plMap));

var propertyEnum = { "typeCode": "规格代码", "typeName": "规格名称", "materials_info_theoretical_components": "理论成分", "materials_info_actual_components": "实测成分", "materials_info_wastage_rate": "损耗率", "materials_lower_weight": "下机克重(公式+1.5)", "materials_info_weight_of_finished_product": "成品克重", "materials_li_lun_cai_liao_cheng_ben": "理论材料成本", "materials_shi_ji_cai_liao_cheng_ben": "实际材料成本", "weavingProcessId": "织造工艺id", "weavingProcess_huaxing": "花型", "weavingProcess_luokou_type": "罗口类型", "weavingProcess_luokou_hengla": "罗口横拉", "weavingProcess_shangtong_hengla": "上筒横拉", "weavingProcess_shangtong_zhila": "上筒直拉", "weavingProcess_wadi_hengla": "袜底横拉", "weavingProcess_wadi_zhila": "袜底直拉", "process": "缝头_缝头工艺", "waban": "定型_袜版", "need_pi_quan": "定型_是否需要皮圈", "yin_xing_wa_dian_jiao": "定型_隐形袜点胶", "ding_xing_shi_chang": "定型_定型时长", "ding_xing_wen_du": "定型_定型温度", "shangtongLength": "定型_上筒长度", "xiatongLength": "定型_下筒长度", "luokouLength": "定型_罗口长度", "luokouWidth": "定型_罗口宽度", "shang_tong_quan_shu_wh": "袜机_上筒圈数(无花型)", "shang_tong_zhuan_su_wh": "袜机_上筒转速(无花型)", "shang_tong_quan_shu_yh": "袜机_上筒圈数(有花型)", "shang_tong_zhuan_su_yh": "袜机_上筒转速(有花型)", "shang_tong_shi_chang": "袜机_上筒时长", "xia_tong_quan_shu": "袜机_下筒圈数", "xia_tong_zhuan_zu_wh": "袜机_下筒转速(无花型)", "xia_tong_quan_shu_wh": "袜机_下筒圈数(无花型)", "xia_tong_zhuan_zu_yh": "袜机_下筒转速(有花型)", "xia_tong_shi_chang": "袜机_下筒时长", "li_kou_quan_shu": "袜机_里口圈数", "luo_kou_quan_shu": "袜机_罗口圈数", "zhuan_su_wh": "袜机_转速(无花型)", "quan_shu_yh": "袜机_圈数(有花型)", "zhuan_su_yh": "袜机_转速(有花型)", "luo_kou_shi_chang": "袜机_罗口时长", "hou_gen_quan_shu": "袜机_后跟圈数", "hou_gen_zhen_shu": "袜机_后跟针数", "hou_gen_zhuan_su": "袜机_后跟转速", "hou_gen_shi_chang": "袜机_后跟时长", "wa_jian_quan_shu": "袜机_袜尖圈数", "wa_jian_zhuan_su": "袜机_袜尖转速", "wa_jian_shi_chang": "袜机_袜尖时长", "guo_qiao_quan_shu": "袜机_过桥圈数", "guo_qiao_zhuan_su": "袜机_过桥转速", "guo_qiao_shi_chang": "袜机_过桥时长", "ji_tou_xian_quan_shu": "袜机_机头线圈数", "ji_tou_xian_zhuan_su": "袜机_机头线转速", "ji_tou_xian_shi_chang": "袜机_机头线时长", "xiang_jin_quan_shu": "袜机_橡筋圈数", "zong_shi_chang": "袜机_总时长(理论)", "dam_zhi_wa_zi_sheng_can_shi_jian": "袜机_单只袜子生产时间(实际)", "ji_chu_jia_gong_fei": "成本_基础加工费(织造)", "te_shu_gong_yi_ming_cheng": "成本_特殊工艺名称", "te_shu_gong_yi_jia_gong_fei": "成本_特殊工艺加工费", "shi_jie_jia_gong_fei_jc_gy": "成本_实际加工费(基础+工艺)", "shi_ji_jia_gong_fei_zj": "成本_实际加工费(诸暨)", "li_lun_feng_tou_fei": "成本_理论缝头费", "shi_ji_feng_tou_fei": "成本_实际缝头费", "li_lun_ding_xing_fei": "成本_理论定型费", "shi_ji_ding_xing_fei": "成本_实际定型费", "tao_ban_fei": "成本_套版/套版费", "ding_biao_fei": "成本_定标费", "he_suan_jia": "成本_核算价", "jun_zhi": "成本_均值", "zui_gao_zhi": "成本_最高值", "shi_ji_chu_chang_jia": "成本_实际出厂价(放单公司成本)", "cheng_ben_jia": "成本_成本价(采购成本价/OA成本价)", "jie_suan_jia": "成本_结算价", "nei_bu_jie_suan_jia": "成本_内部结算价(运营成本)" }

var data = {};
Object.keys(propertyEnum).forEach(k => {
    data[propertyEnum[k]] = '';
})

console.log('--------------------------------------------');

console.log(JSON.stringify(data));

var data = { "规格代码": "", "规格名称": "", "理论成分": "", "实测成分": "", "损耗率": "", "下机克重(公式+1.5)": "", "成品克重": "", "理论材料成本": "", "实际材料成本": "", "织造工艺名称": "", "花型": "", "罗口类型": "", "罗口横拉": "", "上筒横拉": "", "上筒直拉": "", "袜底横拉": "", "袜底直拉": "", "缝头_缝头工艺": "", "定型_袜版": "", "定型_是否需要皮圈": "", "定型_隐形袜点胶": "", "定型_定型时长": "", "定型_定型温度": "", "定型_上筒长度": "", "定型_下筒长度": "", "定型_罗口长度": "", "定型_罗口宽度": "", "袜机_上筒圈数(无花型)": "", "袜机_上筒转速(无花型)": "", "袜机_上筒圈数(有花型)": "", "袜机_上筒转速(有花型)": "", "袜机_上筒时长": "", "袜机_下筒圈数": "", "袜机_下筒转速(无花型)": "", "袜机_下筒圈数(无花型)": "", "袜机_下筒转速(有花型)": "", "袜机_下筒时长": "", "袜机_里口圈数": "", "袜机_罗口圈数": "", "袜机_转速(无花型)": "", "袜机_圈数(有花型)": "", "袜机_转速(有花型)": "", "袜机_罗口时长": "", "袜机_后跟圈数": "", "袜机_后跟针数": "", "袜机_后跟转速": "", "袜机_后跟时长": "", "袜机_袜尖圈数": "", "袜机_袜尖转速": "", "袜机_袜尖时长": "", "袜机_过桥圈数": "", "袜机_过桥转速": "", "袜机_过桥时长": "", "袜机_机头线圈数": "", "袜机_机头线转速": "", "袜机_机头线时长": "", "袜机_橡筋圈数": "", "袜机_总时长(理论)": "", "袜机_单只袜子生产时间(实际)": "", "成本_基础加工费(织造)": "", "成本_特殊工艺名称": "", "成本_特殊工艺加工费": "", "成本_实际加工费(基础+工艺)": "", "成本_实际加工费(诸暨)": "", "成本_理论缝头费": "", "成本_实际缝头费": "", "成本_理论定型费": "", "成本_实际定型费": "", "成本_套版/套版费": "", "成本_定标费": "", "成本_核算价": "", "成本_均值": "", "成本_最高值": "", "成本_实际出厂价(放单公司成本)": "", "成本_成本价(采购成本价/OA成本价)": "", "成本_结算价": "", "成本_内部结算价(运营成本)": "" }
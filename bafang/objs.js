module.exports.nl_out_stock_header = [{
    tableName: 'order_no',
    type: 'VARCHAR'
}, {
    tableName: 'date',
    type: 'BIGINT'
}, {
    tableName: 'customer_id',
    type: 'BIGINT'
}, {
    tableName: 'customer_name',
    type: 'VARCHAR'
}, {
    tableName: 'purpose',
    type: 'VARCHAR'
}, {
    tableName: 'weight',
    type: 'INTEGER'
}, {
    tableName: 'create_user_id',
    type: 'BIGINT'
}, {
    tableName: 'create_time',
    type: 'BIGINT'
}, {
    tableName: 'update_user_id',
    type: 'BIGINT'
}, {
    tableName: 'update_time',
    type: 'BIGINT'
}]

module.exports.nl_in_stock_header = [{
    tableName: 'order_no',
    type: 'VARCHAR'
}, {
    tableName: 'source_from',
    type: 'VARCHAR'
}, {
    tableName: 'date',
    type: 'BIGINT'
}, {
    tableName: 'invoice_no',
    type: 'VARCHAR'
}, {
    tableName: 'way_bill_no',
    type: 'VARCHAR'
}, {
    tableName: 'weight',
    type: 'INTEGER'
}, {
    tableName: 'create_user_id',
    type: 'BIGINT'
}, {
    tableName: 'create_time',
    type: 'BIGINT'
}, {
    tableName: 'update_user_id',
    type: 'BIGINT'
}, {
    tableName: 'update_time',
    type: 'BIGINT'
}]

module.exports.buchong = [{
    tableName: 'area_code',
    type: 'VARCHAR'
}]

module.exports.JuShuiTanOrder = [{
        tableName: 'o_id',
        type: 'BIGINT'
    },
    {
        tableName: 'shop_id',
        type: 'BIGINT'
    },
    {
        tableName: 'so_id',
        type: 'BIGINT'
    },
    {
        tableName: 'order_date',
        type: 'BIGINT'
    },
    {
        tableName: 'shop_status',
        type: 'VARCHAR'
    },
    {
        tableName: 'question_type',
        type: 'VARCHAR'
    },
    {
        tableName: 'question_desc',
        type: 'VARCHAR'
    },
    {
        tableName: 'status',
        type: 'VARCHAR'
    },
    {
        tableName: 'shop_buyer_id',
        type: 'VARCHAR'
    },
    {
        tableName: 'receiver_state',
        type: 'VARCHAR'
    },
    {
        tableName: 'receiver_city',
        type: 'VARCHAR'
    },
    {
        tableName: 'receiver_district',
        type: 'VARCHAR'
    },
    {
        tableName: 'receiver_address',
        type: 'VARCHAR'
    },
    {
        tableName: 'receiver_name',
        type: 'VARCHAR'
    },
    {
        tableName: 'receiver_mobile',
        type: 'VARCHAR'
    },
    {
        tableName: 'send_date',
        type: 'BIGINT'
    },
    {
        tableName: 'pay_amount',
        type: 'DECIMAL'
    },
    {
        tableName: 'freight',
        type: 'DECIMAL'
    },
    {
        tableName: 'remark',
        type: 'VARCHAR'
    },
    {
        tableName: 'is_cod',
        type: 'BOOLEAN'
    },
    {
        tableName: 'type',
        type: 'VARCHAR'
    },
    {
        tableName: 'paid_amount',
        type: 'DECIMAL'
    },
    {
        tableName: 'pay_date',
        type: 'BIGINT'
    },
    {
        tableName: 'outer_pay_id',
        type: 'VARCHAR'
    },
    {
        tableName: 'modified',
        type: 'BIGINT'
    },
    {
        tableName: 'order_from',
        type: 'VARCHAR'
    },
    {
        tableName: 'pay_id',
        type: 'VARCHAR'
    },
    {
        tableName: 'outer_pay_id',
        type: 'VARCHAR'
    },
    {
        tableName: 'payment',
        type: 'VARCHAR'
    },
    {
        tableName: 'buyer_account',
        type: 'VARCHAR'
    },
    {
        tableName: 'is_order_pay',
        type: 'BOOLEAN'
    },
    {
        tableName: 'shop_name',
        type: 'VARCHAR'
    },
    {
        tableName: 'l_id',
        type: 'VARCHAR'
    },
    {
        tableName: 'wms_co_id',
        type: 'BIGINT'
    },
    {
        tableName: 'logistics_company',
        type: 'VARCHAR'
    },
    {
        tableName: 'co_id',
        type: 'INTEGER'
    },
    {
        tableName: 'currency',
        type: 'VARCHAR'
    }
]
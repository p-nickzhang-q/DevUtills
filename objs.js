var customer_service_record = [
    {
        tableName: 'service_id',
        type: 'BIGINT'
    },
    {
        tableName: 'service_no',
        type: 'VARCHAR'
    },
    {
        tableName: 'service_type',
        type: 'INTEGER'
    },
    {
        tableName: 'customer_id',
        type: 'BIGINT'
    },
    {
        tableName: 'sales_order_id',
        type: 'BIGINT'
    },
    {
        tableName: 'damage_count',
        type: 'INTEGER'
    },
    {
        tableName: 'error_code',
        type: 'VARCHAR'
    },
    {
        tableName: 'production_date',
        type: 'BIGINT'
    },
    {
        tableName: 'technical_support_type',
        type: 'INTEGER'
    },
    {
        tableName: 'technical_support_date',
        type: 'BIGINT'
    },
    {
        tableName: 'weight',
        type: 'INTEGER'
    },
    {
        tableName: 'create_time',
        type: 'BIGINT'
    },
    {
        tableName: 'create_user_id',
        type: 'BIGINT'
    },
    {
        tableName: 'update_time',
        type: 'BIGINT'
    },
    {
        tableName: 'update_user_id',
        type: 'BIGINT'
    }
]

var customer_service_record_detail = [
    {
        tableName: 'category_root_id',
        type: 'BIGINT'
    },
    {
        tableName: 'item_id',
        type: 'BIGINT'
    },
    {
        tableName: 'damage_count',
        type: 'INTEGER'
    },
    {
        tableName: 'error_code',
        type: 'BIGINT'
    },
    {
        tableName: 'production_date',
        type: 'BIGINT'
    },
    {
        tableName: 'bf_art_no',
        type: 'VARCHAR'
    },
    {
        tableName: 'sn',
        type: 'VARCHAR'
    },
    {
        tableName: 'weight',
        type: 'INTEGER'
    },
    {
        tableName: 'create_time',
        type: 'BIGINT'
    },
    {
        tableName: 'create_user_id',
        type: 'BIGINT'
    },
    {
        tableName: 'update_time',
        type: 'BIGINT'
    },
    {
        tableName: 'update_user_id',
        type: 'BIGINT'
    }
]

module.exports.customer_service_record = customer_service_record;
module.exports.customer_service_record_detail = customer_service_record_detail;
module.exports.clean_record = [
    {
        tableName: 'clean_type',
        type: 'INTEGER'
    },
    {
        tableName: 'operator_id',
        type: 'BIGINT'
    },
    {
        tableName: 'org_id',
        type: 'BIGINT'
    },
    {
        tableName: 'customer_id',
        type: 'BIGINT'
    },
    {
        tableName: 'ci_no',
        type: 'VARCHAR'
    },
    {
        tableName: 'deliver_order_no',
        type: 'VARCHAR'
    },
    {
        tableName: 'country',
        type: 'VARCHAR'
    },
    {
        tableName: 'vat',
        type: 'VARCHAR'
    },
    {
        tableName: 'bl',
        type: 'VARCHAR'
    },
    {
        tableName: 'sailing_date',
        type: 'VARCHAR'
    },
    {
        tableName: 'invoice_no',
        type: 'VARCHAR'
    },
    {
        tableName: 'other',
        type: 'VARCHAR'
    },
    {
        tableName: 'status',
        type: 'INTEGER'
    },
    {
        tableName: 'weight',
        type: 'INTEGER'
    },
    {
        tableName: 'create_time',
        type: 'BIGINT'
    },
    {
        tableName: 'create_user_id',
        type: 'BIGINT'
    },
    {
        tableName: 'update_time',
        type: 'BIGINT'
    },
    {
        tableName: 'update_user_id',
        type: 'BIGINT'
    }
]
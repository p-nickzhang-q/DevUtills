var customer_service_record = [{
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

var customer_service_record_detail = [{
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
module.exports.clean_record = [{
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
        tableName: 'ci_file_id',
        type: 'BIGINT'
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
        tableName: 'invoice_file_id',
        type: 'BIGINT'
    },
    {
        tableName: 'other',
        type: 'VARCHAR'
    },
    {
        tableName: 'other_file_id',
        type: 'BIGINT'
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

module.exports.technical_services_allot = [{
        tableName: 'service_id',
        type: 'BIGINT'
    },
    {
        tableName: 'service_no',
        type: 'VARCHAR'
    },
    {
        tableName: 'technical_id',
        type: 'BIGINT'
    },
    {
        tableName: 'service_type',
        type: 'INTEGER'
    },
    {
        tableName: 'customer_name',
        type: 'VARCHAR'
    },
    {
        tableName: 'cs_id',
        type: 'BIGINT'
    },
    {
        tableName: 'cs_name',
        type: 'VARCHAR'
    },
    {
        tableName: 'allocated_date',
        type: 'BIGINT'
    },
    {
        tableName: 'desci',
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

module.exports.component_repair_record = [{
        tableName: 'sn',
        type: 'VARCHAR'
    },
    {
        tableName: 'customer_id',
        type: 'BIGINT'
    },
    {
        tableName: 'production_date',
        type: 'BIGINT'
    },
    {
        tableName: 'error_code',
        type: 'VARCHAR'
    },
    {
        tableName: 'fault_desc',
        type: 'VARCHAR'
    },
    {
        tableName: 'diagnosis_id',
        type: 'BIGINT'
    },
    {
        tableName: 'service_id',
        type: 'BIGINT'
    },
    {
        tableName: 'soulution',
        type: 'VARCHAR'
    },
    {
        tableName: 'soultion_id',
        type: 'BIGINT'
    },
    {
        tableName: 'division_res',
        type: 'BIGINT'
    },
    {
        tableName: 'desci',
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

module.exports.parcel_information_detail = [{
        tableName: 'pi_no',
        type: 'VARCHAR'
    },
    {
        tableName: 'category_root_id',
        type: 'BIGINT'
    },
    {
        tableName: 'item_id',
        type: 'BIGINT'
    },
    {
        tableName: 'model_name',
        type: 'VARCHAR'
    },
    {
        tableName: 'bf_art_no',
        type: 'VARCHAR'
    },
    {
        tableName: 'customer_art_no',
        type: 'VARCHAR'
    },
    {
        tableName: 'description',
        type: 'VARCHAR'
    },
    {
        tableName: 'quantity',
        type: 'INTEGER'
    },
    {
        tableName: 'gw',
        type: 'BIGINT'
    },
    {
        tableName: 'nw',
        type: 'BIGINT'
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

module.exports.buchongxingxi = [{
    tableName: 'password',
    type: 'VARCHAR'
}]

module.exports.user_info = [{
        tableName: 'user_id',
        type: 'BIGINT'
    },
    {
        tableName: 'country',
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

module.exports.payment_term = [{
        tableName: 'payment_term',
        type: 'VARCHAR'
    },
    {
        tableName: 'code',
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

module.exports.inventory_reminder = [{
        tableName: 'item_code',
        type: 'VARCHAR'
    },
    {
        tableName: 'item_name',
        type: 'VARCHAR'
    },
    {
        tableName: 'remind_quantity',
        type: 'INTEGER'
    },
    {
        tableName: 'type',
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

module.exports.service_claims_record = [{
        tableName: 'company_id',
        type: 'BIGINT'
    }, {
        tableName: 'name',
        type: 'VARCHAR'
    }, {
        tableName: 'company_no',
        type: 'VARCHAR'
    }, {
        tableName: 'email',
        type: 'VARCHAR'
    }, {
        tableName: 'atten',
        type: 'VARCHAR'
    }, {
        tableName: 'phone',
        type: 'VARCHAR'
    }, {
        tableName: 'country',
        type: 'INTEGER'
    }, {
        tableName: 'carrier_order_no',
        type: 'VARCHAR'
    }, {
        tableName: 'carrier_name',
        type: 'VARCHAR'
    }, {
        tableName: 'carrier_id',
        type: 'BIGINT'
    }, {
        tableName: 'files',
        type: 'VARCHAR'
    }, {
        tableName: 'description',
        type: 'VARCHAR'
    }, {
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
import * as z from 'zod';
export declare const zFieldError: z.ZodObject<{
    field: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
export declare const zErrorResponse: z.ZodObject<{
    message: z.ZodString;
    code: z.ZodEnum<{
        BAD_REQUEST: "BAD_REQUEST";
        UNAUTHORIZED: "UNAUTHORIZED";
        PAYMENT_REQUIRED: "PAYMENT_REQUIRED";
        FORBIDDEN: "FORBIDDEN";
        NOT_FOUND: "NOT_FOUND";
        CONFLICT: "CONFLICT";
        INTERNAL_ERROR: "INTERNAL_ERROR";
        VALIDATION_FAILED: "VALIDATION_FAILED";
        UNKNOWN_ERROR: "UNKNOWN_ERROR";
    }>;
    details: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>>>;
    trace_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zGitConfig: z.ZodObject<{
    url: z.ZodString;
    branch: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    include_git_history: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    username: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    private_key: z.ZodOptional<z.ZodString>;
    passphrase: z.ZodOptional<z.ZodString>;
    depth: z.ZodOptional<z.ZodInt>;
    submodules: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const zWorkerJobResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        worker: "worker";
    }>;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    temporal_schedule_id: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zAgentJobResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        agent: "agent";
    }>;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    agent_id: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    agent_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    temporal_schedule_id: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zManualJobResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        manual: "manual";
    }>;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zWorkspaceBillingResponse: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    workspace_id: z.ZodOptional<z.ZodUUID>;
    stripe_customer_id: z.ZodOptional<z.ZodString>;
    stripe_subscription_id: z.ZodOptional<z.ZodString>;
    stripe_payment_method_id: z.ZodOptional<z.ZodString>;
    billing_email: z.ZodOptional<z.ZodString>;
    payment_method_last4: z.ZodOptional<z.ZodString>;
    payment_method_brand: z.ZodOptional<z.ZodEnum<{
        link: "link";
        amex: "amex";
        cartes_bancaires: "cartes_bancaires";
        diners: "diners";
        discover: "discover";
        eftpos_au: "eftpos_au";
        jcb: "jcb";
        mastercard: "mastercard";
        unionpay: "unionpay";
        visa: "visa";
        unknown: "unknown";
    }>>;
    payment_method_exp_month: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    payment_method_exp_year: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    billing_status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        past_due: "past_due";
        unpaid: "unpaid";
        canceled: "canceled";
        incomplete: "incomplete";
        incomplete_expired: "incomplete_expired";
        trialing: "trialing";
        paused: "paused";
    }>>;
    last_payment_error: z.ZodOptional<z.ZodString>;
    last_low_balance_alert_at: z.ZodOptional<z.ZodISODateTime>;
    created_at: z.ZodOptional<z.ZodISODateTime>;
    updated_at: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>;
export declare const zAttachPaymentMethodRequest: z.ZodObject<{
    payment_method_id: z.ZodString;
}, z.core.$strip>;
export declare const zCreateCreditPurchaseRequest: z.ZodObject<{
    amount_cents: z.ZodCoercedBigInt<unknown>;
}, z.core.$strip>;
export declare const zCreditPurchaseResponse: z.ZodObject<{
    payment_intent_id: z.ZodOptional<z.ZodString>;
    client_secret: z.ZodOptional<z.ZodString>;
    amount_cents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    currency: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zConfirmCreditPurchaseRequest: z.ZodObject<{
    payment_intent_id: z.ZodString;
}, z.core.$strip>;
export declare const zCreditBalanceResponse: z.ZodObject<{
    workspace_id: z.ZodOptional<z.ZodUUID>;
    balance: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    currency: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zCreditTransaction: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    workspace_id: z.ZodOptional<z.ZodUUID>;
    transaction_type: z.ZodOptional<z.ZodEnum<{
        purchase: "purchase";
        deduction: "deduction";
        refund: "refund";
        bonus: "bonus";
    }>>;
    amount: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    balance_after: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    description: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    created_at: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>;
export declare const zCreditTransactionsResponse: z.ZodObject<{
    transactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodUUID>;
        workspace_id: z.ZodOptional<z.ZodUUID>;
        transaction_type: z.ZodOptional<z.ZodEnum<{
            purchase: "purchase";
            deduction: "deduction";
            refund: "refund";
            bonus: "bonus";
        }>>;
        amount: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        balance_after: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        description: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        created_at: z.ZodOptional<z.ZodISODateTime>;
    }, z.core.$strip>>>;
    total: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    limit: z.ZodOptional<z.ZodInt>;
    offset: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export declare const zUsageMetricDto: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    activity_name: z.ZodOptional<z.ZodString>;
    metric_type: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    unit: z.ZodOptional<z.ZodString>;
    cost: z.ZodOptional<z.ZodNumber>;
    created_at: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>;
export declare const zUsageHistoryResponse: z.ZodObject<{
    metrics: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodUUID>;
        activity_name: z.ZodOptional<z.ZodString>;
        metric_type: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        unit: z.ZodOptional<z.ZodString>;
        cost: z.ZodOptional<z.ZodNumber>;
        created_at: z.ZodOptional<z.ZodISODateTime>;
    }, z.core.$strip>>>;
    total: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export declare const zInvoiceDto: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    number: z.ZodOptional<z.ZodString>;
    amount_due: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    amount_paid: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    amount_remaining: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    currency: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    created: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    hosted_invoice_url: z.ZodOptional<z.ZodString>;
    invoice_pdf: z.ZodOptional<z.ZodString>;
    period_start: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    period_end: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    subtotal: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    total: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    customer_email: z.ZodOptional<z.ZodString>;
    customer_name: z.ZodOptional<z.ZodString>;
    payment_intent_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zInvoicesResponse: z.ZodObject<{
    invoices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        number: z.ZodOptional<z.ZodString>;
        amount_due: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        amount_paid: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        amount_remaining: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        currency: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodString>;
        created: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        hosted_invoice_url: z.ZodOptional<z.ZodString>;
        invoice_pdf: z.ZodOptional<z.ZodString>;
        period_start: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        period_end: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        subtotal: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        total: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        customer_email: z.ZodOptional<z.ZodString>;
        customer_name: z.ZodOptional<z.ZodString>;
        payment_intent_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const zWorkspaceResponse: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    description: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zCreateWorkspace: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zUpdateWorkspace: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zJobStats: z.ZodObject<{
    total_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    active_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    inactive_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    worker_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    agent_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    manual_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
}, z.core.$strip>;
export declare const zDashboardBackupStats: z.ZodObject<{
    total_backups: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    successful_backups: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    failed_backups: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    success_rate: z.ZodOptional<z.ZodNumber>;
    backups_last_24h: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    backups_last_7d: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    backups_last_30d: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    last_successful_backup_at: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>;
export declare const zDashboardAgentStats: z.ZodObject<{
    total_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    active_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    inactive_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    orphaned_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
}, z.core.$strip>;
export declare const zBillingOverview: z.ZodObject<{
    credit_balance: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    credit_balance_currency: z.ZodOptional<z.ZodString>;
    current_month_cost: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    has_payment_method: z.ZodOptional<z.ZodBoolean>;
    billing_status: z.ZodOptional<z.ZodString>;
    is_low_balance: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const zStorageUsage: z.ZodObject<{
    total_bytes: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    total_mb: z.ZodOptional<z.ZodNumber>;
    total_gb: z.ZodOptional<z.ZodNumber>;
    formatted_size: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zRecentActivity: z.ZodObject<{
    last_backup_at: z.ZodOptional<z.ZodISODateTime>;
    last_successful_backup_at: z.ZodOptional<z.ZodISODateTime>;
    recent_failures_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
}, z.core.$strip>;
export declare const zBackupTrendPoint: z.ZodObject<{
    date: z.ZodOptional<z.ZodString>;
    backup_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    successful_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    failed_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
}, z.core.$strip>;
export declare const zCostTrends: z.ZodObject<{
    current_month_cost: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    estimated_total: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    currency: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zHealthStatus: z.ZodObject<{
    overall_health: z.ZodOptional<z.ZodEnum<{
        healthy: "healthy";
        warning: "warning";
        critical: "critical";
    }>>;
    issues: z.ZodOptional<z.ZodArray<z.ZodString>>;
    has_recent_failures: z.ZodOptional<z.ZodBoolean>;
    is_low_balance: z.ZodOptional<z.ZodBoolean>;
    has_orphaned_agents: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const zQuickActions: z.ZodObject<{
    needs_payment_method: z.ZodOptional<z.ZodBoolean>;
    needs_top_up: z.ZodOptional<z.ZodBoolean>;
    has_failed_backups: z.ZodOptional<z.ZodBoolean>;
    has_orphaned_agents: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const zWorkspaceDashboard: z.ZodObject<{
    job_stats: z.ZodOptional<z.ZodObject<{
        total_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        active_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        inactive_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        worker_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        agent_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        manual_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    }, z.core.$strip>>;
    backup_stats: z.ZodOptional<z.ZodObject<{
        total_backups: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        successful_backups: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        failed_backups: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        success_rate: z.ZodOptional<z.ZodNumber>;
        backups_last_24h: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        backups_last_7d: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        backups_last_30d: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        last_successful_backup_at: z.ZodOptional<z.ZodISODateTime>;
    }, z.core.$strip>>;
    agent_stats: z.ZodOptional<z.ZodObject<{
        total_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        active_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        inactive_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        orphaned_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    }, z.core.$strip>>;
    billing_overview: z.ZodOptional<z.ZodObject<{
        credit_balance: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        credit_balance_currency: z.ZodOptional<z.ZodString>;
        current_month_cost: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        has_payment_method: z.ZodOptional<z.ZodBoolean>;
        billing_status: z.ZodOptional<z.ZodString>;
        is_low_balance: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    storage_usage: z.ZodOptional<z.ZodObject<{
        total_bytes: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        total_mb: z.ZodOptional<z.ZodNumber>;
        total_gb: z.ZodOptional<z.ZodNumber>;
        formatted_size: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    recent_activity: z.ZodOptional<z.ZodObject<{
        last_backup_at: z.ZodOptional<z.ZodISODateTime>;
        last_successful_backup_at: z.ZodOptional<z.ZodISODateTime>;
        recent_failures_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    }, z.core.$strip>>;
    backup_trends: z.ZodOptional<z.ZodArray<z.ZodObject<{
        date: z.ZodOptional<z.ZodString>;
        backup_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        successful_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        failed_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    }, z.core.$strip>>>;
    cost_trends: z.ZodOptional<z.ZodObject<{
        current_month_cost: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        estimated_total: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        currency: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    health_status: z.ZodOptional<z.ZodObject<{
        overall_health: z.ZodOptional<z.ZodEnum<{
            healthy: "healthy";
            warning: "warning";
            critical: "critical";
        }>>;
        issues: z.ZodOptional<z.ZodArray<z.ZodString>>;
        has_recent_failures: z.ZodOptional<z.ZodBoolean>;
        is_low_balance: z.ZodOptional<z.ZodBoolean>;
        has_orphaned_agents: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    quick_actions: z.ZodOptional<z.ZodObject<{
        needs_payment_method: z.ZodOptional<z.ZodBoolean>;
        needs_top_up: z.ZodOptional<z.ZodBoolean>;
        has_failed_backups: z.ZodOptional<z.ZodBoolean>;
        has_orphaned_agents: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const zAgentResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    provider_user_id: z.ZodString;
    username: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    status: z.ZodString;
    password: z.ZodString;
    grant_type: z.ZodString;
    client_id: z.ZodString;
    audience: z.ZodString;
    realm: z.ZodString;
    scope: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zCreateAgent: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zUpdateAgent: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zCreateWorkerJob: z.ZodObject<{
    name: z.ZodString;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export declare const zCreateAgentJob: z.ZodObject<{
    name: z.ZodString;
    agent_id: z.ZodUUID;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export declare const zCreateManualJob: z.ZodObject<{
    name: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export declare const zUpdateJob: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodOptional<z.ZodString>;
    schedule: z.ZodOptional<z.ZodString>;
    agent_id: z.ZodOptional<z.ZodUUID>;
}, z.core.$strip>;
export declare const zJobBackupStats: z.ZodObject<{
    total_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    total_storage_bytes: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    success_rate: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const zBackupResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    job_id: z.ZodUUID;
    status: z.ZodEnum<{
        requested: "requested";
        uploading: "uploading";
        completed: "completed";
        failed: "failed";
    }>;
    started_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    completed_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zTemporalStatus: z.ZodObject<{
    schedule_id: z.ZodString;
    next_run_time: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    paused: z.ZodBoolean;
    note: z.ZodString;
}, z.core.$strip>;
export declare const zJobDetailsResponse: z.ZodObject<{
    job: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
        type: z.ZodLiteral<"worker">;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodUUID;
        workspace_id: z.ZodUUID;
        enabled: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodEnum<{
            worker: "worker";
        }>;
        provider: z.ZodEnum<{
            http: "http";
            ftp: "ftp";
            webdav: "webdav";
            git: "git";
            "aws.s3": "aws.s3";
            "aws.dynamodb": "aws.dynamodb";
            mysql: "mysql";
            postgres: "postgres";
            mssql: "mssql";
            redis: "redis";
        }>;
        schedule: z.ZodString;
        max_backup_count: z.ZodInt;
        retention_lock_period: z.ZodCoercedBigInt<unknown>;
        max_backup_age: z.ZodCoercedBigInt<unknown>;
        compression_level: z.ZodInt;
        temporal_schedule_id: z.ZodString;
        created_at: z.ZodISODateTime;
        updated_at: z.ZodISODateTime;
    }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
        type: z.ZodLiteral<"agent">;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodUUID;
        workspace_id: z.ZodUUID;
        enabled: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodEnum<{
            agent: "agent";
        }>;
        provider: z.ZodEnum<{
            http: "http";
            ftp: "ftp";
            webdav: "webdav";
            git: "git";
            "aws.s3": "aws.s3";
            "aws.dynamodb": "aws.dynamodb";
            mysql: "mysql";
            postgres: "postgres";
            mssql: "mssql";
            redis: "redis";
        }>;
        agent_id: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        agent_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        schedule: z.ZodString;
        max_backup_count: z.ZodInt;
        retention_lock_period: z.ZodCoercedBigInt<unknown>;
        max_backup_age: z.ZodCoercedBigInt<unknown>;
        compression_level: z.ZodInt;
        temporal_schedule_id: z.ZodString;
        created_at: z.ZodISODateTime;
        updated_at: z.ZodISODateTime;
    }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
        type: z.ZodLiteral<"manual">;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodUUID;
        workspace_id: z.ZodUUID;
        enabled: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodEnum<{
            manual: "manual";
        }>;
        max_backup_count: z.ZodInt;
        retention_lock_period: z.ZodCoercedBigInt<unknown>;
        max_backup_age: z.ZodCoercedBigInt<unknown>;
        compression_level: z.ZodInt;
        created_at: z.ZodISODateTime;
        updated_at: z.ZodISODateTime;
    }, z.core.$strip>>]>;
    stats: z.ZodOptional<z.ZodObject<{
        total_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        total_storage_bytes: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        success_rate: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    recent_backups: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
        status: z.ZodEnum<{
            requested: "requested";
            uploading: "uploading";
            completed: "completed";
            failed: "failed";
        }>;
        started_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        completed_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        created_at: z.ZodISODateTime;
        updated_at: z.ZodISODateTime;
    }, z.core.$strip>>>;
    temporal_status: z.ZodOptional<z.ZodObject<{
        schedule_id: z.ZodString;
        next_run_time: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        paused: z.ZodBoolean;
        note: z.ZodString;
    }, z.core.$strip>>;
    cost: z.ZodString;
}, z.core.$strip>;
export declare const zJobHistoryItem: z.ZodObject<{
    run_id: z.ZodString;
    status: z.ZodString;
    start_time: z.ZodISODateTime;
    close_time: z.ZodOptional<z.ZodISODateTime>;
    duration: z.ZodOptional<z.ZodString>;
    backup: z.ZodOptional<z.ZodObject<{
        id: z.ZodUUID;
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
        status: z.ZodEnum<{
            requested: "requested";
            uploading: "uploading";
            completed: "completed";
            failed: "failed";
        }>;
        started_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        completed_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        created_at: z.ZodISODateTime;
        updated_at: z.ZodISODateTime;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const zBackupUploadResponse: z.ZodObject<{
    upload_url: z.ZodString;
    expires_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zBackupConfirm: z.ZodObject<{
    status: z.ZodBoolean;
}, z.core.$strip>;
export declare const zDownloadUrlResponse: z.ZodObject<{
    download_url: z.ZodString;
    expires_at: z.ZodISODateTime;
    filename: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    download_command: z.ZodOptional<z.ZodString>;
    warning: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zHealthCheckData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodOptional<z.ZodNever>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Service is healthy
 */
export declare const zHealthCheckResponse: z.ZodObject<{
    Status: z.ZodString;
}, z.core.$strip>;
export declare const zGetBillingInfoData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Billing info
 */
export declare const zGetBillingInfoResponse: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    workspace_id: z.ZodOptional<z.ZodUUID>;
    stripe_customer_id: z.ZodOptional<z.ZodString>;
    stripe_subscription_id: z.ZodOptional<z.ZodString>;
    stripe_payment_method_id: z.ZodOptional<z.ZodString>;
    billing_email: z.ZodOptional<z.ZodString>;
    payment_method_last4: z.ZodOptional<z.ZodString>;
    payment_method_brand: z.ZodOptional<z.ZodEnum<{
        link: "link";
        amex: "amex";
        cartes_bancaires: "cartes_bancaires";
        diners: "diners";
        discover: "discover";
        eftpos_au: "eftpos_au";
        jcb: "jcb";
        mastercard: "mastercard";
        unionpay: "unionpay";
        visa: "visa";
        unknown: "unknown";
    }>>;
    payment_method_exp_month: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    payment_method_exp_year: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    billing_status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        past_due: "past_due";
        unpaid: "unpaid";
        canceled: "canceled";
        incomplete: "incomplete";
        incomplete_expired: "incomplete_expired";
        trialing: "trialing";
        paused: "paused";
    }>>;
    last_payment_error: z.ZodOptional<z.ZodString>;
    last_low_balance_alert_at: z.ZodOptional<z.ZodISODateTime>;
    created_at: z.ZodOptional<z.ZodISODateTime>;
    updated_at: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>;
export declare const zDetachPaymentMethodData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
export declare const zAttachPaymentMethodData: z.ZodObject<{
    body: z.ZodObject<{
        payment_method_id: z.ZodString;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
export declare const zCreateCreditPurchaseData: z.ZodObject<{
    body: z.ZodObject<{
        amount_cents: z.ZodCoercedBigInt<unknown>;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Credit purchase created
 */
export declare const zCreateCreditPurchaseResponse: z.ZodObject<{
    payment_intent_id: z.ZodOptional<z.ZodString>;
    client_secret: z.ZodOptional<z.ZodString>;
    amount_cents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    currency: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zConfirmCreditPurchaseData: z.ZodObject<{
    body: z.ZodObject<{
        payment_intent_id: z.ZodString;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Credit purchase confirmed, returns updated credit balance
 */
export declare const zConfirmCreditPurchaseResponse: z.ZodObject<{
    workspace_id: z.ZodOptional<z.ZodUUID>;
    balance: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    currency: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zGetCreditBalanceData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Credit balance
 */
export declare const zGetCreditBalanceResponse: z.ZodObject<{
    workspace_id: z.ZodOptional<z.ZodUUID>;
    balance: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    currency: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zListCreditTransactionsData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodObject<{
        limit: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
        offset: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Credit transactions
 */
export declare const zListCreditTransactionsResponse: z.ZodObject<{
    transactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodUUID>;
        workspace_id: z.ZodOptional<z.ZodUUID>;
        transaction_type: z.ZodOptional<z.ZodEnum<{
            purchase: "purchase";
            deduction: "deduction";
            refund: "refund";
            bonus: "bonus";
        }>>;
        amount: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        balance_after: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        description: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        created_at: z.ZodOptional<z.ZodISODateTime>;
    }, z.core.$strip>>>;
    total: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    limit: z.ZodOptional<z.ZodInt>;
    offset: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export declare const zGetUsageHistoryData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodObject<{
        limit: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
        offset: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Usage history
 */
export declare const zGetUsageHistoryResponse: z.ZodObject<{
    metrics: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodUUID>;
        activity_name: z.ZodOptional<z.ZodString>;
        metric_type: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        unit: z.ZodOptional<z.ZodString>;
        cost: z.ZodOptional<z.ZodNumber>;
        created_at: z.ZodOptional<z.ZodISODateTime>;
    }, z.core.$strip>>>;
    total: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export declare const zListInvoicesData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodObject<{
        limit: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * A list of invoices
 */
export declare const zListInvoicesResponse: z.ZodObject<{
    invoices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        number: z.ZodOptional<z.ZodString>;
        amount_due: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        amount_paid: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        amount_remaining: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        currency: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodString>;
        created: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        hosted_invoice_url: z.ZodOptional<z.ZodString>;
        invoice_pdf: z.ZodOptional<z.ZodString>;
        period_start: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        period_end: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        subtotal: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        total: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        customer_email: z.ZodOptional<z.ZodString>;
        customer_name: z.ZodOptional<z.ZodString>;
        payment_intent_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const zGetUpcomingInvoiceData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
export declare const zGetUpcomingInvoiceResponse: z.ZodUnion<readonly [z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    number: z.ZodOptional<z.ZodString>;
    amount_due: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    amount_paid: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    amount_remaining: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    currency: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    created: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    hosted_invoice_url: z.ZodOptional<z.ZodString>;
    invoice_pdf: z.ZodOptional<z.ZodString>;
    period_start: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    period_end: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    subtotal: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    total: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    customer_email: z.ZodOptional<z.ZodString>;
    customer_name: z.ZodOptional<z.ZodString>;
    payment_intent_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodVoid]>;
export declare const zListWorkspacesData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodOptional<z.ZodNever>;
    query: z.ZodOptional<z.ZodObject<{
        limit: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
        offset: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * A list of workspaces
 */
export declare const zListWorkspacesResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    description: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>;
export declare const zCreateWorkspaceData: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    path: z.ZodOptional<z.ZodNever>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The created workspace
 */
export declare const zCreateWorkspaceResponse: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    description: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zDeleteWorkspaceData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Workspace deleted successfully
 */
export declare const zDeleteWorkspaceResponse: z.ZodVoid;
export declare const zGetWorkspaceData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The workspace details
 */
export declare const zGetWorkspaceResponse: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    description: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zUpdateWorkspaceData: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The updated workspace
 */
export declare const zUpdateWorkspaceResponse: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    description: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zGetWorkspaceInfoData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Workspace dashboard info
 */
export declare const zGetWorkspaceInfoResponse: z.ZodObject<{
    job_stats: z.ZodOptional<z.ZodObject<{
        total_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        active_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        inactive_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        worker_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        agent_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        manual_jobs: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    }, z.core.$strip>>;
    backup_stats: z.ZodOptional<z.ZodObject<{
        total_backups: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        successful_backups: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        failed_backups: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        success_rate: z.ZodOptional<z.ZodNumber>;
        backups_last_24h: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        backups_last_7d: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        backups_last_30d: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        last_successful_backup_at: z.ZodOptional<z.ZodISODateTime>;
    }, z.core.$strip>>;
    agent_stats: z.ZodOptional<z.ZodObject<{
        total_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        active_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        inactive_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        orphaned_agents: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    }, z.core.$strip>>;
    billing_overview: z.ZodOptional<z.ZodObject<{
        credit_balance: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        credit_balance_currency: z.ZodOptional<z.ZodString>;
        current_month_cost: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        has_payment_method: z.ZodOptional<z.ZodBoolean>;
        billing_status: z.ZodOptional<z.ZodString>;
        is_low_balance: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    storage_usage: z.ZodOptional<z.ZodObject<{
        total_bytes: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        total_mb: z.ZodOptional<z.ZodNumber>;
        total_gb: z.ZodOptional<z.ZodNumber>;
        formatted_size: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    recent_activity: z.ZodOptional<z.ZodObject<{
        last_backup_at: z.ZodOptional<z.ZodISODateTime>;
        last_successful_backup_at: z.ZodOptional<z.ZodISODateTime>;
        recent_failures_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    }, z.core.$strip>>;
    backup_trends: z.ZodOptional<z.ZodArray<z.ZodObject<{
        date: z.ZodOptional<z.ZodString>;
        backup_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        successful_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        failed_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    }, z.core.$strip>>>;
    cost_trends: z.ZodOptional<z.ZodObject<{
        current_month_cost: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        estimated_total: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        currency: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    health_status: z.ZodOptional<z.ZodObject<{
        overall_health: z.ZodOptional<z.ZodEnum<{
            healthy: "healthy";
            warning: "warning";
            critical: "critical";
        }>>;
        issues: z.ZodOptional<z.ZodArray<z.ZodString>>;
        has_recent_failures: z.ZodOptional<z.ZodBoolean>;
        is_low_balance: z.ZodOptional<z.ZodBoolean>;
        has_orphaned_agents: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    quick_actions: z.ZodOptional<z.ZodObject<{
        needs_payment_method: z.ZodOptional<z.ZodBoolean>;
        needs_top_up: z.ZodOptional<z.ZodBoolean>;
        has_failed_backups: z.ZodOptional<z.ZodBoolean>;
        has_orphaned_agents: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const zListAgentsData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodObject<{
        limit: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
        offset: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * A list of agents
 */
export declare const zListAgentsResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    provider_user_id: z.ZodString;
    username: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    status: z.ZodString;
    password: z.ZodString;
    grant_type: z.ZodString;
    client_id: z.ZodString;
    audience: z.ZodString;
    realm: z.ZodString;
    scope: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>;
export declare const zCreateAgentData: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The created agent
 */
export declare const zCreateAgentResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    provider_user_id: z.ZodString;
    username: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    status: z.ZodString;
    password: z.ZodString;
    grant_type: z.ZodString;
    client_id: z.ZodString;
    audience: z.ZodString;
    realm: z.ZodString;
    scope: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zDeleteAgentData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        agent_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Agent deleted successfully
 */
export declare const zDeleteAgentResponse: z.ZodVoid;
export declare const zGetAgentData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        agent_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The agent details
 */
export declare const zGetAgentResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    provider_user_id: z.ZodString;
    username: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    status: z.ZodString;
    password: z.ZodString;
    grant_type: z.ZodString;
    client_id: z.ZodString;
    audience: z.ZodString;
    realm: z.ZodString;
    scope: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zUpdateAgentData: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        agent_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The updated agent
 */
export declare const zUpdateAgentResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    provider_user_id: z.ZodString;
    username: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    status: z.ZodString;
    password: z.ZodString;
    grant_type: z.ZodString;
    client_id: z.ZodString;
    audience: z.ZodString;
    realm: z.ZodString;
    scope: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zResetAgentCredentialsData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        agent_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * New credentials
 */
export declare const zResetAgentCredentialsResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    provider_user_id: z.ZodString;
    username: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    status: z.ZodString;
    password: z.ZodString;
    grant_type: z.ZodString;
    client_id: z.ZodString;
    audience: z.ZodString;
    realm: z.ZodString;
    scope: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zListJobsData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodObject<{
        limit: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
        offset: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * A list of jobs
 */
export declare const zListJobsResponse: z.ZodArray<z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"worker">;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        worker: "worker";
    }>;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    temporal_schedule_id: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"agent">;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        agent: "agent";
    }>;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    agent_id: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    agent_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    temporal_schedule_id: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"manual">;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        manual: "manual";
    }>;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>]>>;
export declare const zCreateWorkerJobData: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        provider: z.ZodEnum<{
            http: "http";
            ftp: "ftp";
            webdav: "webdav";
            git: "git";
            "aws.s3": "aws.s3";
            "aws.dynamodb": "aws.dynamodb";
            mysql: "mysql";
            postgres: "postgres";
            mssql: "mssql";
            redis: "redis";
        }>;
        config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schedule: z.ZodString;
        max_backup_count: z.ZodInt;
        retention_lock_period: z.ZodCoercedBigInt<unknown>;
        max_backup_age: z.ZodCoercedBigInt<unknown>;
        compression_level: z.ZodOptional<z.ZodInt>;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The created worker job
 */
export declare const zCreateWorkerJobResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        worker: "worker";
    }>;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    temporal_schedule_id: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zCreateAgentJobData: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        agent_id: z.ZodUUID;
        provider: z.ZodEnum<{
            http: "http";
            ftp: "ftp";
            webdav: "webdav";
            git: "git";
            "aws.s3": "aws.s3";
            "aws.dynamodb": "aws.dynamodb";
            mysql: "mysql";
            postgres: "postgres";
            mssql: "mssql";
            redis: "redis";
        }>;
        schedule: z.ZodString;
        max_backup_count: z.ZodInt;
        retention_lock_period: z.ZodCoercedBigInt<unknown>;
        max_backup_age: z.ZodCoercedBigInt<unknown>;
        compression_level: z.ZodOptional<z.ZodInt>;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The created agent job
 */
export declare const zCreateAgentJobResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        agent: "agent";
    }>;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    agent_id: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    agent_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    temporal_schedule_id: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zCreateManualJobData: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        max_backup_count: z.ZodInt;
        retention_lock_period: z.ZodCoercedBigInt<unknown>;
        max_backup_age: z.ZodCoercedBigInt<unknown>;
        compression_level: z.ZodOptional<z.ZodInt>;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The created manual job
 */
export declare const zCreateManualJobResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        manual: "manual";
    }>;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zDeleteJobData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Job deleted successfully
 */
export declare const zDeleteJobResponse: z.ZodVoid;
export declare const zGetJobData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The job details
 */
export declare const zGetJobResponse: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"worker">;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        worker: "worker";
    }>;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    temporal_schedule_id: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"agent">;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        agent: "agent";
    }>;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    agent_id: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    agent_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    temporal_schedule_id: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"manual">;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        manual: "manual";
    }>;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>]>;
export declare const zUpdateJobData: z.ZodObject<{
    body: z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodOptional<z.ZodString>;
        schedule: z.ZodOptional<z.ZodString>;
        agent_id: z.ZodOptional<z.ZodUUID>;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The updated job
 */
export declare const zUpdateJobResponse: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"worker">;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        worker: "worker";
    }>;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    temporal_schedule_id: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"agent">;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        agent: "agent";
    }>;
    provider: z.ZodEnum<{
        http: "http";
        ftp: "ftp";
        webdav: "webdav";
        git: "git";
        "aws.s3": "aws.s3";
        "aws.dynamodb": "aws.dynamodb";
        mysql: "mysql";
        postgres: "postgres";
        mssql: "mssql";
        redis: "redis";
    }>;
    agent_id: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    agent_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    schedule: z.ZodString;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    temporal_schedule_id: z.ZodString;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"manual">;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    enabled: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodEnum<{
        manual: "manual";
    }>;
    max_backup_count: z.ZodInt;
    retention_lock_period: z.ZodCoercedBigInt<unknown>;
    max_backup_age: z.ZodCoercedBigInt<unknown>;
    compression_level: z.ZodInt;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>]>;
export declare const zTriggerJobData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Job triggered successfully
 */
export declare const zTriggerJobResponse: z.ZodObject<{
    message: z.ZodOptional<z.ZodString>;
    workflow_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zGetJobDetailsData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The job details
 */
export declare const zGetJobDetailsResponse: z.ZodObject<{
    job: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
        type: z.ZodLiteral<"worker">;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodUUID;
        workspace_id: z.ZodUUID;
        enabled: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodEnum<{
            worker: "worker";
        }>;
        provider: z.ZodEnum<{
            http: "http";
            ftp: "ftp";
            webdav: "webdav";
            git: "git";
            "aws.s3": "aws.s3";
            "aws.dynamodb": "aws.dynamodb";
            mysql: "mysql";
            postgres: "postgres";
            mssql: "mssql";
            redis: "redis";
        }>;
        schedule: z.ZodString;
        max_backup_count: z.ZodInt;
        retention_lock_period: z.ZodCoercedBigInt<unknown>;
        max_backup_age: z.ZodCoercedBigInt<unknown>;
        compression_level: z.ZodInt;
        temporal_schedule_id: z.ZodString;
        created_at: z.ZodISODateTime;
        updated_at: z.ZodISODateTime;
    }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
        type: z.ZodLiteral<"agent">;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodUUID;
        workspace_id: z.ZodUUID;
        enabled: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodEnum<{
            agent: "agent";
        }>;
        provider: z.ZodEnum<{
            http: "http";
            ftp: "ftp";
            webdav: "webdav";
            git: "git";
            "aws.s3": "aws.s3";
            "aws.dynamodb": "aws.dynamodb";
            mysql: "mysql";
            postgres: "postgres";
            mssql: "mssql";
            redis: "redis";
        }>;
        agent_id: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        agent_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        schedule: z.ZodString;
        max_backup_count: z.ZodInt;
        retention_lock_period: z.ZodCoercedBigInt<unknown>;
        max_backup_age: z.ZodCoercedBigInt<unknown>;
        compression_level: z.ZodInt;
        temporal_schedule_id: z.ZodString;
        created_at: z.ZodISODateTime;
        updated_at: z.ZodISODateTime;
    }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
        type: z.ZodLiteral<"manual">;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodUUID;
        workspace_id: z.ZodUUID;
        enabled: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodEnum<{
            manual: "manual";
        }>;
        max_backup_count: z.ZodInt;
        retention_lock_period: z.ZodCoercedBigInt<unknown>;
        max_backup_age: z.ZodCoercedBigInt<unknown>;
        compression_level: z.ZodInt;
        created_at: z.ZodISODateTime;
        updated_at: z.ZodISODateTime;
    }, z.core.$strip>>]>;
    stats: z.ZodOptional<z.ZodObject<{
        total_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        total_storage_bytes: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
        success_rate: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    recent_backups: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
        status: z.ZodEnum<{
            requested: "requested";
            uploading: "uploading";
            completed: "completed";
            failed: "failed";
        }>;
        started_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        completed_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        created_at: z.ZodISODateTime;
        updated_at: z.ZodISODateTime;
    }, z.core.$strip>>>;
    temporal_status: z.ZodOptional<z.ZodObject<{
        schedule_id: z.ZodString;
        next_run_time: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        paused: z.ZodBoolean;
        note: z.ZodString;
    }, z.core.$strip>>;
    cost: z.ZodString;
}, z.core.$strip>;
export declare const zGetJobHistoryData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodObject<{
        limit: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
        offset: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Job execution history
 */
export declare const zGetJobHistoryResponse: z.ZodArray<z.ZodObject<{
    run_id: z.ZodString;
    status: z.ZodString;
    start_time: z.ZodISODateTime;
    close_time: z.ZodOptional<z.ZodISODateTime>;
    duration: z.ZodOptional<z.ZodString>;
    backup: z.ZodOptional<z.ZodObject<{
        id: z.ZodUUID;
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
        status: z.ZodEnum<{
            requested: "requested";
            uploading: "uploading";
            completed: "completed";
            failed: "failed";
        }>;
        started_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        completed_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        created_at: z.ZodISODateTime;
        updated_at: z.ZodISODateTime;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export declare const zGetJobBackupTrendsData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Successful operation
 */
export declare const zGetJobBackupTrendsResponse: z.ZodArray<z.ZodObject<{
    date: z.ZodOptional<z.ZodString>;
    backup_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    successful_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    failed_count: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
}, z.core.$strip>>;
export declare const zRequestBackupData: z.ZodObject<{
    body: z.ZodOptional<z.ZodObject<{
        run_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Backup requested successfully
 */
export declare const zRequestBackupResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    job_id: z.ZodUUID;
    status: z.ZodEnum<{
        requested: "requested";
        uploading: "uploading";
        completed: "completed";
        failed: "failed";
    }>;
    started_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    completed_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zListBackupsData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodObject<{
        limit: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
        offset: z.ZodDefault<z.ZodOptional<z.ZodInt>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * A list of backups
 */
export declare const zListBackupsResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    job_id: z.ZodUUID;
    status: z.ZodEnum<{
        requested: "requested";
        uploading: "uploading";
        completed: "completed";
        failed: "failed";
    }>;
    started_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    completed_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>>;
export declare const zDeleteBackupData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
        backup_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Backup deleted successfully
 */
export declare const zDeleteBackupResponse: z.ZodVoid;
export declare const zGetBackupData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
        backup_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * The backup details
 */
export declare const zGetBackupResponse: z.ZodObject<{
    id: z.ZodUUID;
    workspace_id: z.ZodUUID;
    job_id: z.ZodUUID;
    status: z.ZodEnum<{
        requested: "requested";
        uploading: "uploading";
        completed: "completed";
        failed: "failed";
    }>;
    started_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    completed_at: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    created_at: z.ZodISODateTime;
    updated_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zUploadBackupData: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        size: z.ZodCoercedBigInt<unknown>;
        checksum: z.ZodString;
        mime_type: z.ZodString;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
        backup_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Upload URL generated
 */
export declare const zUploadBackupResponse: z.ZodObject<{
    upload_url: z.ZodString;
    expires_at: z.ZodISODateTime;
}, z.core.$strip>;
export declare const zConfirmBackupData: z.ZodObject<{
    body: z.ZodObject<{
        status: z.ZodBoolean;
    }, z.core.$strip>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
        backup_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Backup confirmed
 */
export declare const zConfirmBackupResponse: z.ZodObject<{
    backup_id: z.ZodOptional<z.ZodUUID>;
    status: z.ZodOptional<z.ZodBoolean>;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zDownloadBackupData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodObject<{
        workspace_id: z.ZodUUID;
        job_id: z.ZodUUID;
        backup_id: z.ZodUUID;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Download URL generated
 */
export declare const zDownloadBackupResponse: z.ZodObject<{
    download_url: z.ZodString;
    expires_at: z.ZodISODateTime;
    filename: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodCoercedBigInt<unknown>>;
    download_command: z.ZodOptional<z.ZodString>;
    warning: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zGetClientConfigAuthData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodOptional<z.ZodNever>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Auth configuration
 */
export declare const zGetClientConfigAuthResponse: z.ZodObject<{
    issuer: z.ZodOptional<z.ZodString>;
    client_id: z.ZodOptional<z.ZodString>;
    audience: z.ZodOptional<z.ZodString>;
    realm: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const zGetAgentConfigHubData: z.ZodObject<{
    body: z.ZodOptional<z.ZodNever>;
    path: z.ZodOptional<z.ZodNever>;
    query: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
/**
 * Hub configuration
 */
export declare const zGetAgentConfigHubResponse: z.ZodObject<{
    server: z.ZodOptional<z.ZodString>;
    workspace: z.ZodOptional<z.ZodString>;
    queue: z.ZodOptional<z.ZodString>;
    tls: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;

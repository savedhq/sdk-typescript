export declare const ErrorResponseSchema: {
    readonly type: "object";
    readonly required: readonly ["message", "code"];
    readonly properties: {
        readonly message: {
            readonly type: "string";
            readonly description: "Human-readable error message";
            readonly example: "Validation failed";
        };
        readonly code: {
            readonly type: "string";
            readonly description: "Machine-readable error code in SCREAMING_SNAKE_CASE";
            readonly enum: readonly ["BAD_REQUEST", "UNAUTHORIZED", "PAYMENT_REQUIRED", "FORBIDDEN", "NOT_FOUND", "CONFLICT", "INTERNAL_ERROR", "VALIDATION_FAILED", "UNKNOWN_ERROR"];
            readonly example: "VALIDATION_FAILED";
        };
        readonly details: {
            readonly type: "array";
            readonly description: "Array of field-level validation errors (only present for validation failures)";
            readonly items: {
                readonly $ref: "#/components/schemas/FieldError";
            };
        };
        readonly trace_id: {
            readonly type: "string";
            readonly description: "OpenTelemetry trace ID for debugging";
            readonly example: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6";
        };
    };
};
export declare const FieldErrorSchema: {
    readonly type: "object";
    readonly required: readonly ["field", "message"];
    readonly properties: {
        readonly field: {
            readonly type: "string";
            readonly description: "The JSON field name that failed validation";
            readonly example: "email";
        };
        readonly message: {
            readonly type: "string";
            readonly description: "Human-readable validation error message";
            readonly example: "must be a valid email address";
        };
    };
};
export declare const GitConfigSchema: {
    readonly type: "object";
    readonly required: readonly ["url"];
    readonly properties: {
        readonly url: {
            readonly type: "string";
        };
        readonly branch: {
            readonly type: "string";
            readonly default: "main";
            readonly description: "Branch to clone. Defaults to main.";
        };
        readonly include_git_history: {
            readonly type: "boolean";
            readonly default: false;
            readonly description: "If true, includes .git dir with full history for all branches.";
        };
        readonly username: {
            readonly type: "string";
        };
        readonly password: {
            readonly type: "string";
        };
        readonly private_key: {
            readonly type: "string";
        };
        readonly passphrase: {
            readonly type: "string";
        };
        readonly depth: {
            readonly type: "integer";
            readonly description: "Shallow clone depth. 0 means full history.";
        };
        readonly submodules: {
            readonly type: "boolean";
        };
    };
};
export declare const WorkerJobResponseSchema: {
    readonly type: "object";
    readonly required: readonly ["id", "workspace_id", "enabled", "name", "type", "provider", "schedule", "max_backup_count", "retention_lock_period", "max_backup_age", "compression_level", "temporal_schedule_id", "created_at", "updated_at"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly workspace_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly enabled: {
            readonly type: "boolean";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["worker"];
        };
        readonly provider: {
            readonly type: "string";
            readonly enum: readonly ["http", "ftp", "webdav", "git", "aws.s3", "aws.dynamodb", "mysql", "postgres", "mssql", "redis"];
        };
        readonly schedule: {
            readonly type: "string";
            readonly description: "Cron schedule expression";
        };
        readonly max_backup_count: {
            readonly type: "integer";
            readonly format: "int32";
        };
        readonly retention_lock_period: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Duration in nanoseconds";
        };
        readonly max_backup_age: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Duration in nanoseconds";
        };
        readonly compression_level: {
            readonly type: "integer";
            readonly format: "int16";
        };
        readonly temporal_schedule_id: {
            readonly type: "string";
            readonly description: "Temporal workflow schedule ID";
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
    };
};
export declare const AgentJobResponseSchema: {
    readonly type: "object";
    readonly required: readonly ["id", "workspace_id", "enabled", "name", "type", "provider", "schedule", "max_backup_count", "retention_lock_period", "max_backup_age", "compression_level", "temporal_schedule_id", "created_at", "updated_at"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly workspace_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly enabled: {
            readonly type: "boolean";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["agent"];
        };
        readonly provider: {
            readonly type: "string";
            readonly enum: readonly ["http", "ftp", "webdav", "git", "aws.s3", "aws.dynamodb", "mysql", "postgres", "mssql", "redis"];
        };
        readonly agent_id: {
            readonly type: readonly ["string", "null"];
            readonly format: "uuid";
            readonly description: "ID of the agent running this job";
        };
        readonly agent_name: {
            readonly type: readonly ["string", "null"];
            readonly description: "Name of the agent running this job";
        };
        readonly schedule: {
            readonly type: "string";
            readonly description: "Cron schedule expression";
        };
        readonly max_backup_count: {
            readonly type: "integer";
            readonly format: "int32";
        };
        readonly retention_lock_period: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Duration in nanoseconds";
        };
        readonly max_backup_age: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Duration in nanoseconds";
        };
        readonly compression_level: {
            readonly type: "integer";
            readonly format: "int16";
        };
        readonly temporal_schedule_id: {
            readonly type: "string";
            readonly description: "Temporal workflow schedule ID";
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
    };
};
export declare const ManualJobResponseSchema: {
    readonly type: "object";
    readonly required: readonly ["id", "workspace_id", "enabled", "name", "type", "max_backup_count", "retention_lock_period", "max_backup_age", "compression_level", "created_at", "updated_at"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly workspace_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly enabled: {
            readonly type: "boolean";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["manual"];
        };
        readonly max_backup_count: {
            readonly type: "integer";
            readonly format: "int32";
        };
        readonly retention_lock_period: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Duration in nanoseconds";
        };
        readonly max_backup_age: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Duration in nanoseconds";
        };
        readonly compression_level: {
            readonly type: "integer";
            readonly format: "int16";
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
    };
};
export declare const WorkspaceBillingResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly workspace_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly stripe_customer_id: {
            readonly type: "string";
        };
        readonly stripe_subscription_id: {
            readonly type: "string";
        };
        readonly stripe_payment_method_id: {
            readonly type: "string";
        };
        readonly billing_email: {
            readonly type: "string";
        };
        readonly payment_method_last4: {
            readonly type: "string";
        };
        readonly payment_method_brand: {
            readonly type: "string";
            readonly enum: readonly ["amex", "cartes_bancaires", "diners", "discover", "eftpos_au", "jcb", "link", "mastercard", "unionpay", "visa", "unknown"];
        };
        readonly payment_method_exp_month: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly payment_method_exp_year: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly billing_status: {
            readonly type: "string";
            readonly enum: readonly ["active", "past_due", "unpaid", "canceled", "incomplete", "incomplete_expired", "trialing", "paused"];
        };
        readonly last_payment_error: {
            readonly type: "string";
        };
        readonly last_low_balance_alert_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
    };
};
export declare const AttachPaymentMethodRequestSchema: {
    readonly type: "object";
    readonly required: readonly ["payment_method_id"];
    readonly properties: {
        readonly payment_method_id: {
            readonly type: "string";
        };
    };
};
export declare const CreateCreditPurchaseRequestSchema: {
    readonly type: "object";
    readonly required: readonly ["amount_cents"];
    readonly properties: {
        readonly amount_cents: {
            readonly type: "integer";
            readonly format: "int64";
            readonly minimum: 1;
        };
    };
};
export declare const CreditPurchaseResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly payment_intent_id: {
            readonly type: "string";
        };
        readonly client_secret: {
            readonly type: "string";
        };
        readonly amount_cents: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly currency: {
            readonly type: "string";
        };
        readonly status: {
            readonly type: "string";
        };
    };
};
export declare const ConfirmCreditPurchaseRequestSchema: {
    readonly type: "object";
    readonly required: readonly ["payment_intent_id"];
    readonly properties: {
        readonly payment_intent_id: {
            readonly type: "string";
        };
    };
};
export declare const CreditBalanceResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly workspace_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly balance: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly currency: {
            readonly type: "string";
        };
    };
};
export declare const CreditTransactionSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly workspace_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly transaction_type: {
            readonly type: "string";
            readonly enum: readonly ["purchase", "deduction", "refund", "bonus"];
        };
        readonly amount: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Amount in cents";
        };
        readonly balance_after: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Deprecated - always 0";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly metadata: {
            readonly type: "object";
            readonly additionalProperties: true;
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
    };
};
export declare const CreditTransactionsResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly transactions: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/CreditTransaction";
            };
        };
        readonly total: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly limit: {
            readonly type: "integer";
        };
        readonly offset: {
            readonly type: "integer";
        };
    };
};
export declare const UsageMetricDTOSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly activity_name: {
            readonly type: "string";
        };
        readonly metric_type: {
            readonly type: "string";
        };
        readonly value: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly unit: {
            readonly type: "string";
        };
        readonly cost: {
            readonly type: "number";
            readonly format: "double";
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
    };
};
export declare const UsageHistoryResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly metrics: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/UsageMetricDTO";
            };
        };
        readonly total: {
            readonly type: "integer";
        };
    };
};
export declare const InvoiceDTOSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly number: {
            readonly type: "string";
        };
        readonly amount_due: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly amount_paid: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly amount_remaining: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly currency: {
            readonly type: "string";
        };
        readonly status: {
            readonly type: "string";
        };
        readonly created: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly hosted_invoice_url: {
            readonly type: "string";
        };
        readonly invoice_pdf: {
            readonly type: "string";
        };
        readonly period_start: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly period_end: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly subtotal: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly total: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly customer_email: {
            readonly type: "string";
        };
        readonly customer_name: {
            readonly type: "string";
        };
        readonly payment_intent_id: {
            readonly type: "string";
        };
    };
};
export declare const InvoicesResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly invoices: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/InvoiceDTO";
            };
        };
    };
};
export declare const WorkspaceResponseSchema: {
    readonly type: "object";
    readonly required: readonly ["id", "name", "description", "created_at", "updated_at"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly format: "uuid";
            readonly description: "The unique identifier of the workspace.";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the workspace.";
        };
        readonly description: {
            readonly type: "string";
            readonly description: "The description of the workspace.";
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "date-time";
            readonly description: "The timestamp when the workspace was created.";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly format: "date-time";
            readonly description: "The timestamp when the workspace was last updated.";
        };
    };
};
export declare const CreateWorkspaceSchema: {
    readonly type: "object";
    readonly required: readonly ["name"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly minLength: 1;
            readonly maxLength: 100;
            readonly description: "The name of the workspace.";
        };
        readonly description: {
            readonly type: "string";
            readonly maxLength: 500;
            readonly description: "A brief description of the workspace.";
        };
    };
};
export declare const UpdateWorkspaceSchema: {
    readonly type: "object";
    readonly required: readonly ["name"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly minLength: 1;
            readonly maxLength: 100;
            readonly description: "The new name of the workspace.";
        };
        readonly description: {
            readonly type: "string";
            readonly maxLength: 500;
            readonly description: "The new description of the workspace.";
        };
    };
};
export declare const JobStatsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly total_jobs: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly active_jobs: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly inactive_jobs: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly worker_jobs: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly agent_jobs: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly manual_jobs: {
            readonly type: "integer";
            readonly format: "int64";
        };
    };
};
export declare const DashboardBackupStatsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly total_backups: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly successful_backups: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly failed_backups: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly success_rate: {
            readonly type: "number";
            readonly format: "double";
        };
        readonly backups_last_24h: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly backups_last_7d: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly backups_last_30d: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly last_successful_backup_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
    };
};
export declare const DashboardAgentStatsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly total_agents: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly active_agents: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly inactive_agents: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly orphaned_agents: {
            readonly type: "integer";
            readonly format: "int64";
        };
    };
};
export declare const BillingOverviewSchema: {
    readonly type: "object";
    readonly properties: {
        readonly credit_balance: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Balance in cents";
        };
        readonly credit_balance_currency: {
            readonly type: "string";
        };
        readonly current_month_cost: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Cost in cents";
        };
        readonly has_payment_method: {
            readonly type: "boolean";
        };
        readonly billing_status: {
            readonly type: "string";
        };
        readonly is_low_balance: {
            readonly type: "boolean";
        };
    };
};
export declare const StorageUsageSchema: {
    readonly type: "object";
    readonly properties: {
        readonly total_bytes: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly total_mb: {
            readonly type: "number";
            readonly format: "double";
        };
        readonly total_gb: {
            readonly type: "number";
            readonly format: "double";
        };
        readonly formatted_size: {
            readonly type: "string";
        };
    };
};
export declare const RecentActivitySchema: {
    readonly type: "object";
    readonly properties: {
        readonly last_backup_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
        readonly last_successful_backup_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
        readonly recent_failures_count: {
            readonly type: "integer";
            readonly format: "int64";
        };
    };
};
export declare const BackupTrendPointSchema: {
    readonly type: "object";
    readonly properties: {
        readonly date: {
            readonly type: "string";
            readonly description: "Date in YYYY-MM-DD format";
        };
        readonly backup_count: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly successful_count: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly failed_count: {
            readonly type: "integer";
            readonly format: "int64";
        };
    };
};
export declare const CostTrendsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly current_month_cost: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Cost in cents";
        };
        readonly estimated_total: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly currency: {
            readonly type: "string";
        };
    };
};
export declare const HealthStatusSchema: {
    readonly type: "object";
    readonly properties: {
        readonly overall_health: {
            readonly type: "string";
            readonly enum: readonly ["healthy", "warning", "critical"];
        };
        readonly issues: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly has_recent_failures: {
            readonly type: "boolean";
        };
        readonly is_low_balance: {
            readonly type: "boolean";
        };
        readonly has_orphaned_agents: {
            readonly type: "boolean";
        };
    };
};
export declare const QuickActionsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly needs_payment_method: {
            readonly type: "boolean";
        };
        readonly needs_top_up: {
            readonly type: "boolean";
        };
        readonly has_failed_backups: {
            readonly type: "boolean";
        };
        readonly has_orphaned_agents: {
            readonly type: "boolean";
        };
    };
};
export declare const WorkspaceDashboardSchema: {
    readonly type: "object";
    readonly properties: {
        readonly job_stats: {
            readonly $ref: "#/components/schemas/JobStats";
        };
        readonly backup_stats: {
            readonly $ref: "#/components/schemas/DashboardBackupStats";
        };
        readonly agent_stats: {
            readonly $ref: "#/components/schemas/DashboardAgentStats";
        };
        readonly billing_overview: {
            readonly $ref: "#/components/schemas/BillingOverview";
        };
        readonly storage_usage: {
            readonly $ref: "#/components/schemas/StorageUsage";
        };
        readonly recent_activity: {
            readonly $ref: "#/components/schemas/RecentActivity";
        };
        readonly backup_trends: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/BackupTrendPoint";
            };
        };
        readonly cost_trends: {
            readonly $ref: "#/components/schemas/CostTrends";
        };
        readonly health_status: {
            readonly $ref: "#/components/schemas/HealthStatus";
        };
        readonly quick_actions: {
            readonly $ref: "#/components/schemas/QuickActions";
        };
    };
};
export declare const AgentResponseSchema: {
    readonly type: "object";
    readonly required: readonly ["id", "workspace_id", "provider_user_id", "username", "name", "description", "status", "password", "grant_type", "client_id", "audience", "realm", "scope", "created_at", "updated_at"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly format: "uuid";
            readonly description: "The unique identifier of the agent.";
        };
        readonly workspace_id: {
            readonly type: "string";
            readonly format: "uuid";
            readonly description: "The unique identifier of the workspace the agent belongs to.";
        };
        readonly provider_user_id: {
            readonly type: "string";
            readonly description: "The provider user ID associated with the agent.";
        };
        readonly username: {
            readonly type: "string";
            readonly description: "The username of the agent.";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the agent.";
        };
        readonly description: {
            readonly type: "string";
            readonly description: "The description of the agent.";
        };
        readonly status: {
            readonly type: "string";
            readonly description: "The status of the agent.";
        };
        readonly password: {
            readonly type: "string";
            readonly description: "The password for the agent.";
        };
        readonly grant_type: {
            readonly type: "string";
            readonly description: "The grant type for the agent.";
        };
        readonly client_id: {
            readonly type: "string";
            readonly description: "The client ID for the agent.";
        };
        readonly audience: {
            readonly type: "string";
            readonly description: "The audience for the agent.";
        };
        readonly realm: {
            readonly type: "string";
            readonly description: "The realm for the agent.";
        };
        readonly scope: {
            readonly type: "string";
            readonly description: "The scope of permissions for the agent.";
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "date-time";
            readonly description: "The timestamp when the agent was created.";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly format: "date-time";
            readonly description: "The timestamp when the agent was last updated.";
        };
    };
};
export declare const CreateAgentSchema: {
    readonly type: "object";
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly maxLength: 100;
            readonly description: "The name of the agent.";
        };
        readonly description: {
            readonly type: "string";
            readonly maxLength: 500;
            readonly description: "A brief description of the agent.";
        };
    };
};
export declare const UpdateAgentSchema: {
    readonly type: "object";
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly maxLength: 100;
            readonly description: "The new name of the agent.";
        };
        readonly description: {
            readonly type: "string";
            readonly maxLength: 500;
            readonly description: "The new description of the agent.";
        };
    };
};
export declare const CreateWorkerJobSchema: {
    readonly type: "object";
    readonly required: readonly ["name", "provider", "schedule", "max_backup_count", "retention_lock_period", "max_backup_age"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly maxLength: 255;
        };
        readonly provider: {
            readonly type: "string";
            readonly enum: readonly ["http", "ftp", "webdav", "git", "aws.s3", "aws.dynamodb", "mysql", "postgres", "mssql", "redis"];
        };
        readonly config: {
            readonly type: "object";
        };
        readonly schedule: {
            readonly type: "string";
        };
        readonly max_backup_count: {
            readonly type: "integer";
            readonly format: "int32";
            readonly minimum: 1;
        };
        readonly retention_lock_period: {
            readonly type: "integer";
            readonly format: "int64";
            readonly minimum: 1;
            readonly description: "Duration in nanoseconds";
        };
        readonly max_backup_age: {
            readonly type: "integer";
            readonly format: "int64";
            readonly minimum: 1;
            readonly description: "Duration in nanoseconds";
        };
        readonly compression_level: {
            readonly type: "integer";
            readonly format: "int16";
        };
    };
};
export declare const CreateAgentJobSchema: {
    readonly type: "object";
    readonly required: readonly ["name", "agent_id", "provider", "schedule", "max_backup_count", "retention_lock_period", "max_backup_age"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly maxLength: 255;
        };
        readonly agent_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly provider: {
            readonly type: "string";
            readonly enum: readonly ["http", "ftp", "webdav", "git", "aws.s3", "aws.dynamodb", "mysql", "postgres", "mssql", "redis"];
        };
        readonly schedule: {
            readonly type: "string";
        };
        readonly max_backup_count: {
            readonly type: "integer";
            readonly format: "int32";
            readonly minimum: 1;
        };
        readonly retention_lock_period: {
            readonly type: "integer";
            readonly format: "int64";
            readonly minimum: 1;
            readonly description: "Duration in nanoseconds";
        };
        readonly max_backup_age: {
            readonly type: "integer";
            readonly format: "int64";
            readonly minimum: 1;
            readonly description: "Duration in nanoseconds";
        };
        readonly compression_level: {
            readonly type: "integer";
            readonly format: "int16";
        };
    };
};
export declare const CreateManualJobSchema: {
    readonly type: "object";
    readonly required: readonly ["name", "max_backup_count", "retention_lock_period", "max_backup_age"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly maxLength: 255;
        };
        readonly max_backup_count: {
            readonly type: "integer";
            readonly format: "int32";
            readonly minimum: 1;
        };
        readonly retention_lock_period: {
            readonly type: "integer";
            readonly format: "int64";
            readonly minimum: 1;
            readonly description: "Duration in nanoseconds";
        };
        readonly max_backup_age: {
            readonly type: "integer";
            readonly format: "int64";
            readonly minimum: 1;
            readonly description: "Duration in nanoseconds";
        };
        readonly compression_level: {
            readonly type: "integer";
            readonly format: "int16";
        };
    };
};
export declare const UpdateJobSchema: {
    readonly type: "object";
    readonly properties: {
        readonly enabled: {
            readonly type: "boolean";
        };
        readonly name: {
            readonly type: "string";
            readonly maxLength: 255;
        };
        readonly schedule: {
            readonly type: "string";
            readonly maxLength: 100;
        };
        readonly agent_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
    };
};
export declare const JobBackupStatsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly total_count: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly total_storage_bytes: {
            readonly type: "integer";
            readonly format: "int64";
        };
        readonly success_rate: {
            readonly type: "number";
            readonly format: "double";
        };
    };
};
export declare const BackupResponseSchema: {
    readonly type: "object";
    readonly required: readonly ["id", "workspace_id", "job_id", "status", "created_at", "updated_at"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly workspace_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly job_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly status: {
            readonly type: "string";
            readonly enum: readonly ["requested", "uploading", "completed", "failed"];
        };
        readonly started_at: {
            readonly type: readonly ["string", "null"];
            readonly format: "date-time";
        };
        readonly completed_at: {
            readonly type: readonly ["string", "null"];
            readonly format: "date-time";
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
    };
};
export declare const TemporalStatusSchema: {
    readonly type: "object";
    readonly required: readonly ["schedule_id", "paused", "note"];
    readonly properties: {
        readonly schedule_id: {
            readonly type: "string";
            readonly description: "Temporal schedule ID";
        };
        readonly next_run_time: {
            readonly type: readonly ["string", "null"];
            readonly format: "date-time";
            readonly description: "Next scheduled run time";
        };
        readonly paused: {
            readonly type: "boolean";
            readonly description: "Whether the schedule is paused";
        };
        readonly note: {
            readonly type: "string";
            readonly description: "Additional status information";
        };
    };
};
export declare const JobDetailsResponseSchema: {
    readonly type: "object";
    readonly required: readonly ["job", "cost"];
    readonly properties: {
        readonly job: {
            readonly oneOf: readonly [{
                readonly $ref: "#/components/schemas/WorkerJobResponse";
            }, {
                readonly $ref: "#/components/schemas/AgentJobResponse";
            }, {
                readonly $ref: "#/components/schemas/ManualJobResponse";
            }];
            readonly discriminator: {
                readonly propertyName: "type";
                readonly mapping: {
                    readonly worker: "#/components/schemas/WorkerJobResponse";
                    readonly agent: "#/components/schemas/AgentJobResponse";
                    readonly manual: "#/components/schemas/ManualJobResponse";
                };
            };
            readonly description: "The job object (type varies based on job type)";
        };
        readonly stats: {
            readonly $ref: "#/components/schemas/JobBackupStats";
            readonly nullable: true;
            readonly description: "Backup statistics for this job";
        };
        readonly recent_backups: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/BackupResponse";
            };
            readonly description: "Recent backups for this job";
        };
        readonly temporal_status: {
            readonly $ref: "#/components/schemas/TemporalStatus";
            readonly nullable: true;
            readonly description: "Temporal workflow status (only for scheduled jobs)";
        };
        readonly cost: {
            readonly type: "string";
            readonly description: "Estimated cost for this job";
        };
    };
};
export declare const JobHistoryItemSchema: {
    readonly type: "object";
    readonly required: readonly ["run_id", "status", "start_time"];
    readonly properties: {
        readonly run_id: {
            readonly type: "string";
        };
        readonly status: {
            readonly type: "string";
        };
        readonly start_time: {
            readonly type: "string";
            readonly format: "date-time";
        };
        readonly close_time: {
            readonly type: "string";
            readonly format: "date-time";
            readonly description: "Present only when the workflow has finished";
        };
        readonly duration: {
            readonly type: "string";
            readonly description: "Present only when the workflow has finished";
        };
        readonly backup: {
            readonly $ref: "#/components/schemas/BackupResponse";
            readonly description: "Present only when a backup record is associated with this run";
        };
    };
};
export declare const BackupUploadResponseSchema: {
    readonly type: "object";
    readonly required: readonly ["upload_url", "expires_at"];
    readonly properties: {
        readonly upload_url: {
            readonly type: "string";
            readonly description: "Pre-signed URL for uploading the backup";
        };
        readonly expires_at: {
            readonly type: "string";
            readonly format: "date-time";
            readonly description: "When the upload URL expires";
        };
    };
};
export declare const BackupConfirmSchema: {
    readonly type: "object";
    readonly required: readonly ["status"];
    readonly properties: {
        readonly status: {
            readonly type: "boolean";
        };
    };
};
export declare const DownloadURLResponseSchema: {
    readonly type: "object";
    readonly required: readonly ["download_url", "expires_at"];
    readonly properties: {
        readonly download_url: {
            readonly type: "string";
            readonly description: "Pre-signed URL for downloading the backup";
        };
        readonly expires_at: {
            readonly type: "string";
            readonly format: "date-time";
            readonly description: "When the download URL expires";
        };
        readonly filename: {
            readonly type: "string";
            readonly description: "Original filename of the backup";
        };
        readonly size: {
            readonly type: "integer";
            readonly format: "int64";
            readonly description: "Size of the backup file in bytes";
        };
        readonly download_command: {
            readonly type: "string";
            readonly description: "curl command for files larger than 5GB";
        };
        readonly warning: {
            readonly type: "string";
            readonly description: "Warning message for large files";
        };
    };
};

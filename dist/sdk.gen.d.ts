import type { Client, Options as Options2, TDataShape } from './client';
import type { AttachPaymentMethodData, AttachPaymentMethodErrors, AttachPaymentMethodResponses, ConfirmBackupData, ConfirmBackupErrors, ConfirmBackupResponses, ConfirmCreditPurchaseData, ConfirmCreditPurchaseErrors, ConfirmCreditPurchaseResponses, CreateAgentData, CreateAgentErrors, CreateAgentJobData, CreateAgentJobErrors, CreateAgentJobResponses, CreateAgentResponses, CreateCreditPurchaseData, CreateCreditPurchaseErrors, CreateCreditPurchaseResponses, CreateManualJobData, CreateManualJobErrors, CreateManualJobResponses, CreateWorkerJobData, CreateWorkerJobErrors, CreateWorkerJobResponses, CreateWorkspaceData, CreateWorkspaceErrors, CreateWorkspaceResponses, DeleteAgentData, DeleteAgentErrors, DeleteAgentResponses, DeleteBackupData, DeleteBackupErrors, DeleteBackupResponses, DeleteJobData, DeleteJobErrors, DeleteJobResponses, DeleteWorkspaceData, DeleteWorkspaceErrors, DeleteWorkspaceResponses, DetachPaymentMethodData, DetachPaymentMethodErrors, DetachPaymentMethodResponses, DownloadBackupData, DownloadBackupErrors, DownloadBackupResponses, GetAgentConfigHubData, GetAgentConfigHubErrors, GetAgentConfigHubResponses, GetAgentData, GetAgentErrors, GetAgentResponses, GetBackupData, GetBackupErrors, GetBackupResponses, GetBillingInfoData, GetBillingInfoErrors, GetBillingInfoResponses, GetClientConfigAuthData, GetClientConfigAuthErrors, GetClientConfigAuthResponses, GetCreditBalanceData, GetCreditBalanceErrors, GetCreditBalanceResponses, GetJobBackupTrendsData, GetJobBackupTrendsErrors, GetJobBackupTrendsResponses, GetJobData, GetJobDetailsData, GetJobDetailsErrors, GetJobDetailsResponses, GetJobErrors, GetJobHistoryData, GetJobHistoryErrors, GetJobHistoryResponses, GetJobResponses, GetUpcomingInvoiceData, GetUpcomingInvoiceErrors, GetUpcomingInvoiceResponses, GetUsageHistoryData, GetUsageHistoryErrors, GetUsageHistoryResponses, GetWorkspaceData, GetWorkspaceErrors, GetWorkspaceInfoData, GetWorkspaceInfoErrors, GetWorkspaceInfoResponses, GetWorkspaceResponses, HealthCheckData, HealthCheckResponses, ListAgentsData, ListAgentsErrors, ListAgentsResponses, ListBackupsData, ListBackupsErrors, ListBackupsResponses, ListCreditTransactionsData, ListCreditTransactionsErrors, ListCreditTransactionsResponses, ListInvoicesData, ListInvoicesErrors, ListInvoicesResponses, ListJobsData, ListJobsErrors, ListJobsResponses, ListWorkspacesData, ListWorkspacesErrors, ListWorkspacesResponses, RequestBackupData, RequestBackupErrors, RequestBackupResponses, ResetAgentCredentialsData, ResetAgentCredentialsErrors, ResetAgentCredentialsResponses, TriggerJobData, TriggerJobErrors, TriggerJobResponses, UpdateAgentData, UpdateAgentErrors, UpdateAgentResponses, UpdateJobData, UpdateJobErrors, UpdateJobResponses, UpdateWorkspaceData, UpdateWorkspaceErrors, UpdateWorkspaceResponses, UploadBackupData, UploadBackupErrors, UploadBackupResponses } from './types.gen';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = Options2<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * Health check
 */
export declare const healthCheck: <ThrowOnError extends boolean = false>(options?: Options<HealthCheckData, ThrowOnError>) => import("./client").RequestResult<HealthCheckResponses, unknown, ThrowOnError>;
/**
 * Get billing info
 */
export declare const getBillingInfo: <ThrowOnError extends boolean = false>(options: Options<GetBillingInfoData, ThrowOnError>) => import("./client").RequestResult<GetBillingInfoResponses, GetBillingInfoErrors, ThrowOnError>;
/**
 * Detach a payment method
 */
export declare const detachPaymentMethod: <ThrowOnError extends boolean = false>(options: Options<DetachPaymentMethodData, ThrowOnError>) => import("./client").RequestResult<DetachPaymentMethodResponses, DetachPaymentMethodErrors, ThrowOnError>;
/**
 * Attach a payment method
 */
export declare const attachPaymentMethod: <ThrowOnError extends boolean = false>(options: Options<AttachPaymentMethodData, ThrowOnError>) => import("./client").RequestResult<AttachPaymentMethodResponses, AttachPaymentMethodErrors, ThrowOnError>;
/**
 * Create a credit purchase
 */
export declare const createCreditPurchase: <ThrowOnError extends boolean = false>(options: Options<CreateCreditPurchaseData, ThrowOnError>) => import("./client").RequestResult<CreateCreditPurchaseResponses, CreateCreditPurchaseErrors, ThrowOnError>;
/**
 * Confirm a credit purchase
 */
export declare const confirmCreditPurchase: <ThrowOnError extends boolean = false>(options: Options<ConfirmCreditPurchaseData, ThrowOnError>) => import("./client").RequestResult<ConfirmCreditPurchaseResponses, ConfirmCreditPurchaseErrors, ThrowOnError>;
/**
 * Get credit balance
 */
export declare const getCreditBalance: <ThrowOnError extends boolean = false>(options: Options<GetCreditBalanceData, ThrowOnError>) => import("./client").RequestResult<GetCreditBalanceResponses, GetCreditBalanceErrors, ThrowOnError>;
/**
 * List credit transactions
 */
export declare const listCreditTransactions: <ThrowOnError extends boolean = false>(options: Options<ListCreditTransactionsData, ThrowOnError>) => import("./client").RequestResult<ListCreditTransactionsResponses, ListCreditTransactionsErrors, ThrowOnError>;
/**
 * Get usage history
 */
export declare const getUsageHistory: <ThrowOnError extends boolean = false>(options: Options<GetUsageHistoryData, ThrowOnError>) => import("./client").RequestResult<GetUsageHistoryResponses, GetUsageHistoryErrors, ThrowOnError>;
/**
 * List invoices
 */
export declare const listInvoices: <ThrowOnError extends boolean = false>(options: Options<ListInvoicesData, ThrowOnError>) => import("./client").RequestResult<ListInvoicesResponses, ListInvoicesErrors, ThrowOnError>;
/**
 * Get upcoming invoice
 */
export declare const getUpcomingInvoice: <ThrowOnError extends boolean = false>(options: Options<GetUpcomingInvoiceData, ThrowOnError>) => import("./client").RequestResult<GetUpcomingInvoiceResponses, GetUpcomingInvoiceErrors, ThrowOnError>;
/**
 * List workspaces
 */
export declare const listWorkspaces: <ThrowOnError extends boolean = false>(options?: Options<ListWorkspacesData, ThrowOnError>) => import("./client").RequestResult<ListWorkspacesResponses, ListWorkspacesErrors, ThrowOnError>;
/**
 * Create a workspace
 */
export declare const createWorkspace: <ThrowOnError extends boolean = false>(options: Options<CreateWorkspaceData, ThrowOnError>) => import("./client").RequestResult<CreateWorkspaceResponses, CreateWorkspaceErrors, ThrowOnError>;
/**
 * Delete a workspace
 */
export declare const deleteWorkspace: <ThrowOnError extends boolean = false>(options: Options<DeleteWorkspaceData, ThrowOnError>) => import("./client").RequestResult<DeleteWorkspaceResponses, DeleteWorkspaceErrors, ThrowOnError>;
/**
 * Get a workspace
 */
export declare const getWorkspace: <ThrowOnError extends boolean = false>(options: Options<GetWorkspaceData, ThrowOnError>) => import("./client").RequestResult<GetWorkspaceResponses, GetWorkspaceErrors, ThrowOnError>;
/**
 * Update a workspace
 */
export declare const updateWorkspace: <ThrowOnError extends boolean = false>(options: Options<UpdateWorkspaceData, ThrowOnError>) => import("./client").RequestResult<UpdateWorkspaceResponses, UpdateWorkspaceErrors, ThrowOnError>;
/**
 * Get workspace dashboard info
 *
 * Returns dashboard widgets including job stats, backup stats, agent stats, billing, storage, trends, and health status.
 */
export declare const getWorkspaceInfo: <ThrowOnError extends boolean = false>(options: Options<GetWorkspaceInfoData, ThrowOnError>) => import("./client").RequestResult<GetWorkspaceInfoResponses, GetWorkspaceInfoErrors, ThrowOnError>;
/**
 * List agents for a workspace
 */
export declare const listAgents: <ThrowOnError extends boolean = false>(options: Options<ListAgentsData, ThrowOnError>) => import("./client").RequestResult<ListAgentsResponses, ListAgentsErrors, ThrowOnError>;
/**
 * Create an agent
 */
export declare const createAgent: <ThrowOnError extends boolean = false>(options: Options<CreateAgentData, ThrowOnError>) => import("./client").RequestResult<CreateAgentResponses, CreateAgentErrors, ThrowOnError>;
/**
 * Delete an agent
 */
export declare const deleteAgent: <ThrowOnError extends boolean = false>(options: Options<DeleteAgentData, ThrowOnError>) => import("./client").RequestResult<DeleteAgentResponses, DeleteAgentErrors, ThrowOnError>;
/**
 * Get an agent
 */
export declare const getAgent: <ThrowOnError extends boolean = false>(options: Options<GetAgentData, ThrowOnError>) => import("./client").RequestResult<GetAgentResponses, GetAgentErrors, ThrowOnError>;
/**
 * Update an agent
 */
export declare const updateAgent: <ThrowOnError extends boolean = false>(options: Options<UpdateAgentData, ThrowOnError>) => import("./client").RequestResult<UpdateAgentResponses, UpdateAgentErrors, ThrowOnError>;
/**
 * Reset agent credentials
 */
export declare const resetAgentCredentials: <ThrowOnError extends boolean = false>(options: Options<ResetAgentCredentialsData, ThrowOnError>) => import("./client").RequestResult<ResetAgentCredentialsResponses, ResetAgentCredentialsErrors, ThrowOnError>;
/**
 * List jobs
 */
export declare const listJobs: <ThrowOnError extends boolean = false>(options: Options<ListJobsData, ThrowOnError>) => import("./client").RequestResult<ListJobsResponses, ListJobsErrors, ThrowOnError>;
/**
 * Create a worker job
 */
export declare const createWorkerJob: <ThrowOnError extends boolean = false>(options: Options<CreateWorkerJobData, ThrowOnError>) => import("./client").RequestResult<CreateWorkerJobResponses, CreateWorkerJobErrors, ThrowOnError>;
/**
 * Create an agent job
 */
export declare const createAgentJob: <ThrowOnError extends boolean = false>(options: Options<CreateAgentJobData, ThrowOnError>) => import("./client").RequestResult<CreateAgentJobResponses, CreateAgentJobErrors, ThrowOnError>;
/**
 * Create a manual job
 */
export declare const createManualJob: <ThrowOnError extends boolean = false>(options: Options<CreateManualJobData, ThrowOnError>) => import("./client").RequestResult<CreateManualJobResponses, CreateManualJobErrors, ThrowOnError>;
/**
 * Delete a job
 */
export declare const deleteJob: <ThrowOnError extends boolean = false>(options: Options<DeleteJobData, ThrowOnError>) => import("./client").RequestResult<DeleteJobResponses, DeleteJobErrors, ThrowOnError>;
/**
 * Get a job
 */
export declare const getJob: <ThrowOnError extends boolean = false>(options: Options<GetJobData, ThrowOnError>) => import("./client").RequestResult<GetJobResponses, GetJobErrors, ThrowOnError>;
/**
 * Update a job
 */
export declare const updateJob: <ThrowOnError extends boolean = false>(options: Options<UpdateJobData, ThrowOnError>) => import("./client").RequestResult<UpdateJobResponses, UpdateJobErrors, ThrowOnError>;
/**
 * Trigger a job
 */
export declare const triggerJob: <ThrowOnError extends boolean = false>(options: Options<TriggerJobData, ThrowOnError>) => import("./client").RequestResult<TriggerJobResponses, TriggerJobErrors, ThrowOnError>;
/**
 * Get job details
 */
export declare const getJobDetails: <ThrowOnError extends boolean = false>(options: Options<GetJobDetailsData, ThrowOnError>) => import("./client").RequestResult<GetJobDetailsResponses, GetJobDetailsErrors, ThrowOnError>;
/**
 * Get job history
 */
export declare const getJobHistory: <ThrowOnError extends boolean = false>(options: Options<GetJobHistoryData, ThrowOnError>) => import("./client").RequestResult<GetJobHistoryResponses, GetJobHistoryErrors, ThrowOnError>;
/**
 * Get Job Backup Trends
 *
 * Returns daily backup execution counts for the last 30 days
 */
export declare const getJobBackupTrends: <ThrowOnError extends boolean = false>(options: Options<GetJobBackupTrendsData, ThrowOnError>) => import("./client").RequestResult<GetJobBackupTrendsResponses, GetJobBackupTrendsErrors, ThrowOnError>;
/**
 * Request a backup
 */
export declare const requestBackup: <ThrowOnError extends boolean = false>(options: Options<RequestBackupData, ThrowOnError>) => import("./client").RequestResult<RequestBackupResponses, RequestBackupErrors, ThrowOnError>;
/**
 * List backups for a job
 */
export declare const listBackups: <ThrowOnError extends boolean = false>(options: Options<ListBackupsData, ThrowOnError>) => import("./client").RequestResult<ListBackupsResponses, ListBackupsErrors, ThrowOnError>;
/**
 * Delete a backup
 */
export declare const deleteBackup: <ThrowOnError extends boolean = false>(options: Options<DeleteBackupData, ThrowOnError>) => import("./client").RequestResult<DeleteBackupResponses, DeleteBackupErrors, ThrowOnError>;
/**
 * Get a backup
 */
export declare const getBackup: <ThrowOnError extends boolean = false>(options: Options<GetBackupData, ThrowOnError>) => import("./client").RequestResult<GetBackupResponses, GetBackupErrors, ThrowOnError>;
/**
 * Upload a backup file
 */
export declare const uploadBackup: <ThrowOnError extends boolean = false>(options: Options<UploadBackupData, ThrowOnError>) => import("./client").RequestResult<UploadBackupResponses, UploadBackupErrors, ThrowOnError>;
/**
 * Confirm backup completion
 */
export declare const confirmBackup: <ThrowOnError extends boolean = false>(options: Options<ConfirmBackupData, ThrowOnError>) => import("./client").RequestResult<ConfirmBackupResponses, ConfirmBackupErrors, ThrowOnError>;
/**
 * Download a backup
 */
export declare const downloadBackup: <ThrowOnError extends boolean = false>(options: Options<DownloadBackupData, ThrowOnError>) => import("./client").RequestResult<DownloadBackupResponses, DownloadBackupErrors, ThrowOnError>;
/**
 * Get client auth configuration
 *
 * Returns Auth0 configuration for client authentication.
 */
export declare const getClientConfigAuth: <ThrowOnError extends boolean = false>(options?: Options<GetClientConfigAuthData, ThrowOnError>) => import("./client").RequestResult<GetClientConfigAuthResponses, GetClientConfigAuthErrors, ThrowOnError>;
/**
 * Get agent hub configuration
 *
 * Returns Temporal hub config for the authenticated agent.
 */
export declare const getAgentConfigHub: <ThrowOnError extends boolean = false>(options?: Options<GetAgentConfigHubData, ThrowOnError>) => import("./client").RequestResult<GetAgentConfigHubResponses, GetAgentConfigHubErrors, ThrowOnError>;

var jsonData = 
[
  {
    "name": "Cloud Service (classic)",
    "notes": "",
    "timing": "Immediate across subscriptions",
    "restrictions": "2-? characters; Uppercase or lowercase letters, numbers and hyphens only; Must start and end with a letter or number",
    "uniqueness": "Must be Azure globally unique",
    "uri": "{name}.cloudapp.net"
  },
  {
    "name": "Document DB Account",
    "notes": "",
    "timing": "Immediate across subscriptions",
    "restrictions": "3-50 characters; Lowercase letters, numbers and hyphens only; Must not start or end with a hyphen",
    "uniqueness": "Must be Azure globally unique",
    "uri": "https://{name}.documents.azure.com:443"
  },
  {
    "name": "Resource Group",
    "notes": "",
    "timing": "Immediate across subscriptions",
    "restrictions": "Uppercase or lowercase letters, numbers, periods, hyphens, underscores and parenthesis only; Cannot end with a period",
    "uniqueness": "Must be unique within a subscription",
    "uri": "N/A"
  },
  {
    "name": "Service Bus  (Namespace)",
    "notes": "",
    "timing": "7 days between subscriptions; Immediate within a subscription",
    "restrictions": "6-50 characters; Uppercase or lowercase letters, numbers, periods, underscores and hyphens only; Must start and end with a letter or number",
    "uniqueness": "Must be Azure globally unique",
    "uri": "https://{name}.servicebus.windows.net"
  },
  {
    "name": "Service Bus - Queue",
    "notes": "",
    "timing": "Inherited",
    "restrictions": "1-50 characters; Uppercase or lowercase letters, numbers and hyphens only; Must start with a letter and end with a letter or number",
    "uniqueness": "Must be unique within the parent Service Bus",
    "uri": "https://{service bus name}.servicebus.windows.net/{name}"
  },
  {
    "name": "SQL Database",
    "notes": "",
    "timing": "Immediate across subscriptions",
    "restrictions": "1-128 characters; Cannot contain '<', '>', '*', '%', '&', '/', '' or '?' characters; Cannot end with a period",
    "uniqueness": "Must be unique within the parent SQL Database Server",
    "uri": "N/A"
  },
  {
    "name": "SQL Database Server",
    "notes": "",
    "timing": "7 days between subscriptions; Immediate within a subscription",
    "restrictions": "1-63 characters; Lowercase letters, numbers and hyphens only; Cannot start or end with a hyphen",
    "uniqueness": "Must be Azure globally unique",
    "uri": "{name}.database.windows.net"
  },
  {
    "name": "Storage  (Account)",
    "notes": "When creating in the Azure Portal (https://portal.azure.com) you can select from a storage type of Classic or Resource Manager. Classic Storage Accounts are visible in both the legacy Auzre Portal (https://manage.windowsazure.com) and Azure Portal while Resource Manager Storage Accounts are only visible in the Azure Portal.",
    "timing": "Immediate across subscriptions",
    "restrictions": "3-24 characters; Lowercase letters or numbers only",
    "uniqueness": "Must be Azure globally unique",
    "uri": "{name}.core.windows.net"
  },
  {
    "name": "Storage - Container (Blobs)",
    "notes": "The names of blob objects stored in a Storage Container are case-sensitive, i.e. Text.txt and test.txt do not resolve to the same resource.",
    "timing": "Inherited",
    "restrictions": "3-63 characters; Lowercase letters, numbers and hyphens only; Must not start or end with a hyphen; Consecutive hyphens not allowed",
    "uniqueness": "Must be unique within the parent Storage Account",
    "uri": "https://{storage account name}.blob.core.windows.net/{name}"
  },
  {
    "name": "Storage - File Share",
    "notes": "",
    "timing": "Inherited",
    "restrictions": "3-63 characters; Lowercase letters, numbers and hyphens only; Must not start or end with a hyphen; Consecutive hyphens not allowed",
    "uniqueness": "Must be unique within the parent Storage Account",
    "uri": "https://{storage account name}.file.core.windows.net/{name}"
  },
  {
    "name": "Storage - Queue",
    "notes": "Storage queues cannot be created through the Portal, i.e. they must be created from code.",
    "timing": "Inherited",
    "restrictions": "3-63 characters; Lowercase letters, numbers and hyphens only; Must not start or end with a hyphen; Consecutive hyphens not allowed",
    "uniqueness": "Must be unique within the parent Storage Account",
    "uri": "https://{storage account name}.queue.core.windows.net/{name}"
  },
  {
    "name": "Storage - Table",
    "notes": "Storage tables cannot be created through the Portal, i.e. they must be created from code.",
    "timing": "Inherited",
    "restrictions": "3-63 characters; Uppercase or lowercase letters and numbers only; Cannot start with a number",
    "uniqueness": "Must be unique within the parent Storage Account",
    "uri": "https://{storage account name}.table.core.windows.net/{name}"
  },
  {
    "name": "Virtual Machine",
    "notes": "Name uniqueness for VMs was indeterminate. I was able to create multiple VMs instances with the same name even within the same subscription though they were under differing Resource Groups. The process of creating a VM also creates a number of other resources, e.g. public IP address, security group, etc. and I did have issues creating a new VM with a previously used name within a Resource Group which still held some of these other resources so some type of name uniqueness requirements are in play but they are not simply the name of the VM itself.",
    "timing": "Immediate across subscriptions",
    "restrictions": "1-15 characters; Uppercase or lowercase letters, numbers and hyphens",
    "uniqueness": "Unknown (see notes)",
    "uri": "N/A"
  },
  {
    "name": "Web App",
    "notes": "",
    "timing": "Immediate across subscriptions",
    "restrictions": "2-60 characters; Uppercase or lowercase letters, numbers and hyphens only; Must not start or end with a hyphen; Cannot have consecutive hyphens",
    "uniqueness": "Must be Azure globally unique",
    "uri": "http(s)://{name}.azurewebsites.net"
  }
]
;
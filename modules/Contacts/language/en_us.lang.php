<?php
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');
/*********************************************************************************
* SugarCRM Community Edition is a customer relationship management program developed by
* SugarCRM, Inc. Copyright (C) 2004-2013 SugarCRM Inc.
* 
* This program is free software; you can redistribute it and/or modify it under
* the terms of the GNU Affero General Public License version 3 as published by the
* Free Software Foundation with the addition of the following permission added
* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
* IN WHICH THE COPYRIGHT IS OWNED BY SUGARCRM, SUGARCRM DISCLAIMS THE WARRANTY
* OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
* 
* This program is distributed in the hope that it will be useful, but WITHOUT
* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
* FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
* details.
* 
* You should have received a copy of the GNU Affero General Public License along with
* this program; if not, see http://www.gnu.org/licenses or write to the Free
* Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
* 02110-1301 USA.
* 
* You can contact SugarCRM, Inc. headquarters at 10050 North Wolfe Road,
* SW2-130, Cupertino, CA 95014, USA. or at email address contact@sugarcrm.com.
* 
* The interactive user interfaces in modified source and object code versions
* of this program must display Appropriate Legal Notices, as required under
* Section 5 of the GNU Affero General Public License version 3.
* 
* In accordance with Section 7(b) of the GNU Affero General Public License version 3,
* these Appropriate Legal Notices must retain the display of the "Powered by
* SugarCRM" logo. If the display of the logo is not reasonably feasible for
* technical reasons, the Appropriate Legal Notices must display the words
* "Powered by SugarCRM".
********************************************************************************/

/*********************************************************************************

* Description:  Defines the English language pack for the base application.
* Portions created by SugarCRM are Copyright (C) SugarCRM, Inc.
* All Rights Reserved.
* Contributor(s): ______________________________________..
********************************************************************************/

$mod_strings = array (
    //DON'T CONVERT THESE THEY ARE MAPPINGS
    'db_last_name' => 'LBL_LIST_LAST_NAME',
    'db_first_name' => 'LBL_LIST_FIRST_NAME',
    'db_title' => 'LBL_LIST_TITLE',
    'db_email1' => 'LBL_LIST_EMAIL_ADDRESS',
    'db_email2' => 'LBL_LIST_OTHER_EMAIL_ADDRESS',
    //END DON'T CONVERT
    'ERR_DELETE_RECORD' => 'Specify the record number to delete the contact.',
    'LBL_ACCOUNT_ID' => 'Account ID:',
    'LBL_ACCOUNT_NAME' => 'Account Name:',
    'LBL_CAMPAIGN'     => 'Campaign:',
    'LBL_ACTIVITIES_SUBPANEL_TITLE'=>'Activities',
    'LBL_ADD_BUSINESSCARD' => 'Enter Business Card',
    'LBL_ADDMORE_BUSINESSCARD' => 'Add another business card',
    'LBL_ADDRESS_INFORMATION' => 'Address Information',
    'LBL_ALT_ADDRESS_CITY' => 'Alternate Address City:',
    'LBL_ALT_ADDRESS_COUNTRY' => 'Alternate Address Country:',
    'LBL_ALT_ADDRESS_POSTALCODE' => 'Alternate Address Postal Code:',
    'LBL_ALT_ADDRESS_STATE' => 'Alternate Address State:',
    'LBL_ALT_ADDRESS_STREET_2' => 'Alternate Address Street 2:',
    'LBL_ALT_ADDRESS_STREET_3' => 'Alternate Address Street 3:',
    'LBL_ALT_ADDRESS_STREET' => 'Alternate Address Street:',
    'LBL_ALTERNATE_ADDRESS' => 'Other Address:',
    'LBL_ALT_ADDRESS' => 'Other Address:',
    'LBL_ANY_ADDRESS' => 'Any Address:',
    'LBL_ANY_EMAIL' => 'Any Email:',
    'LBL_ANY_PHONE' => 'Any Phone:',
    'LBL_ASSIGNED_TO_NAME' => 'Assigned to:',
    'LBL_ASSIGNED_TO_ID' => 'Assigned User',
    'LBL_ASSISTANT_PHONE' => 'Assistant Phone:',
    'LBL_ASSISTANT' => 'Assistant:',
    'LBL_BIRTHDATE' => 'Birthdate:',
    'LBL_BUSINESSCARD' => 'Business Card',
    'LBL_CITY' => 'City:',
    'LBL_CAMPAIGN_ID' => 'Campaign ID',
    'LBL_CONTACT_INFORMATION' => 'Overview',
    'LBL_CONTACT_NAME' => 'Contact Name:',
    'LBL_CONTACT_OPP_FORM_TITLE' => 'Contact-Opportunity:',
	'LBL_MANAGE_BUYINGCENTER' => 'Manage Buyingcenter',
    'LBL_CONTACT_ROLE' => 'Role',
    'LBL_PROPENSITY_TO_BUY' => 'Propensity to buy',
    'LBL_LEVEL_OF_INFLUENCE' => 'Level of influence',
    'LBL_LEVEL_OF_SUPPORT' => 'Level of support',
    'LBL_CONTACT' => 'Contact:',
    'LBL_COUNTRY' => 'Country:',
    'LBL_CREATED_ACCOUNT' => 'Created a new account',
    'LBL_CREATED_CALL' => 'Created a new call',
    'LBL_CREATED_CONTACT' => 'Created a new contact',
    'LBL_CREATED_MEETING' => 'Created a new meeting',
    'LBL_CREATED_OPPORTUNITY' =>'Created a new opportunity',
    'LBL_DATE_MODIFIED' => 'Date Modified:',
    'LBL_DEFAULT_SUBPANEL_TITLE' => 'Contacts',
    'LBL_DEPARTMENT' => 'Department:',
    'LBL_DESCRIPTION_INFORMATION' => 'Description Information',
    'LBL_DESCRIPTION' => 'Description:',
    'LBL_DIRECT_REPORTS_SUBPANEL_TITLE'=>'Direct Reports',
    'LBL_DO_NOT_CALL' => 'Do Not Call:',
    'LBL_DUPLICATE' => 'Possible Duplicate Contacts',
    'LBL_EMAIL_ADDRESS' => 'Email Address:',
    'LBL_EMAIL_OPT_OUT' => 'Email Opt Out:',
    'LBL_EXISTING_ACCOUNT' => 'Used an existing account',
    'LBL_EXISTING_CONTACT' => 'Used an existing contact',
    'LBL_EXISTING_OPPORTUNITY'=> 'Used an existing opportunity',
    'LBL_FAX_PHONE' => 'Fax:',
    'LBL_FIRST_NAME' => 'First Name:',
    'LBL_FULL_NAME' => 'Full Name:',
    'LBL_HISTORY_SUBPANEL_TITLE'=>'History',
    'LBL_HOME_PHONE' => 'Home:',
    'LBL_ID' => 'ID:',
    'LBL_IMPORT_VCARD' => 'Import vCard',
    'LBL_VCARD' => 'vCard',
    'LBL_IMPORT_VCARDTEXT' => 'Automatically create a new contact by importing a vCard from your file system.',
    'LBL_INVALID_EMAIL'=>'Invalid Email:',
    'LBL_INVITEE' => 'Direct Reports',
    'LBL_LAST_NAME' => 'Last Name:',
    'LBL_LEAD_SOURCE' => 'Lead Source:',
    'LBL_LIST_ACCEPT_STATUS' => 'Accept Status',
    'LBL_LIST_ACCOUNT_NAME' => 'Account Name',
    'LBL_LIST_CONTACT_NAME' => 'Contact Name',
    'LBL_LIST_CONTACT_ROLE' => 'Role',
    'LBL_LIST_EMAIL_ADDRESS' => 'Email',
    'LBL_LIST_FIRST_NAME' => 'First Name',
    'LBL_LIST_FORM_TITLE' => 'Contact List',
    'LBL_VIEW_FORM_TITLE' => 'Contact View',
    'LBL_LIST_LAST_NAME' => 'Last Name',
    'LBL_LIST_NAME' => 'Name',
    'LBL_LIST_OTHER_EMAIL_ADDRESS' => 'Other Email',
    'LBL_LIST_PHONE' => 'Office Phone',
    'LBL_LIST_TITLE' => 'Title',
    'LBL_MOBILE_PHONE' => 'Mobile:',
    'LBL_MODIFIED' => 'Modified By:',
    'LBL_MODULE_NAME' => 'Contacts',
    'LBL_MODULE_TITLE' => 'Contacts: Home',
    'LBL_NAME' => 'Name:',
    'LBL_NEW_FORM_TITLE' => 'New Contact',
    'LBL_NEW_PORTAL_PASSWORD' => 'New Portal Password:',
    'LBL_NOTE_SUBJECT' =>'Note Subject',
    'LBL_OFFICE_PHONE' => 'Office Phone:',
    'LBL_OPP_NAME' => 'Opportunity Name:',
    'LBL_OPPORTUNITY_ROLE_ID'=>'Opportunity Role ID:',
    'LBL_OPPORTUNITY_ROLE'=>'Opportunity Role',
    'LBL_OTHER_EMAIL_ADDRESS' => 'Other Email:',
    'LBL_OTHER_PHONE' => 'Other Phone:',
    'LBL_PHONE' => 'Phone:',
    'LBL_PORTAL_ACTIVE' => 'Portal Active:',
    'LBL_PORTAL_APP'=>'Portal Application:',
    'LBL_PORTAL_INFORMATION' => 'Portal Information',
    'LBL_PORTAL_NAME' => 'Portal Name:',
    'LBL_PORTAL_PASSWORD_ISSET' => 'Portal Password is Set:',
    'LBL_STREET' => 'Street',
    'LBL_POSTAL_CODE' => 'Postal Code:',
    'LBL_PRIMARY_ADDRESS_CITY' => 'Primary Address City:',
    'LBL_PRIMARY_ADDRESS_COUNTRY' => 'Primary Address Country:',
    'LBL_PRIMARY_ADDRESS_POSTALCODE' => 'Primary Address Postal Code:',
    'LBL_PRIMARY_ADDRESS_STATE' => 'Primary Address State:',
    'LBL_PRIMARY_ADDRESS_STREET_2' => 'Primary Address Street 2:',
    'LBL_PRIMARY_ADDRESS_STREET_3' => 'Primary Address Street 3:',
    'LBL_PRIMARY_ADDRESS_STREET' => 'Primary Address Street:',
    'LBL_PRIMARY_ADDRESS' => 'Primary Address:',
    'LBL_PRODUCTS_TITLE'=>'Products',
    'LBL_RELATED_CONTACTS_TITLE'=>'Related Contacts',
    'LBL_REPORTS_TO_ID'=>'Reports to ID:',
    'LBL_REPORTS_TO' => 'Reports To:',
    'LBL_RESOURCE_NAME' => 'Resource Name',
    'LBL_SALUTATION' => 'Salutation:',
    'LBL_SAVE_CONTACT' => 'Save Contact',
    'LBL_SEARCH_FORM_TITLE' => 'Contact Search',
    'LBL_SELECT_CHECKED_BUTTON_LABEL' => 'Select Checked Contacts',
    'LBL_SELECT_CHECKED_BUTTON_TITLE' => 'Select Checked Contacts',
    'LBL_STATE' => 'State:',
    'LBL_SYNC_CONTACT' => 'Sync to Outlook&reg;:',
    'LBL_PROSPECT_LIST' => 'Prospect List',
    'LBL_TITLE' => 'Title:',
    'LNK_CONTACT_LIST' => 'View Contacts',
    'LNK_IMPORT_VCARD' => 'Create Contact From vCard',
    'LNK_NEW_ACCOUNT' => 'Create Account',
    'LNK_NEW_APPOINTMENT' => 'Create Appointment',
    'LNK_NEW_CALL' => 'Log Call',
    'LNK_NEW_CASE' => 'Create Case',
    'LNK_NEW_CONTACT' => 'Create Contact',
    'LNK_NEW_EMAIL' => 'Archive Email',
    'LNK_NEW_MEETING' => 'Schedule Meeting',
    'LNK_NEW_NOTE' => 'Create Note',
    'LNK_NEW_OPPORTUNITY' => 'Create Opportunity',
    'LNK_NEW_TASK' => 'Create Task',
    'LNK_SELECT_ACCOUNT' => "Select Account",
	'MSG_DUPLICATE' => 'The contact record you are about to create might be a duplicate of a contact record that already exists. Contact records containing similar names are listed below.<br>Click Create Contact to continue creating this new contact, or select an existing contact listed below.',
	'MSG_SHOW_DUPLICATES' => 'The contact record you are about to create might be a duplicate of a contact record that already exists. Contact records containing similar names are listed below.<br>Click Save to continue creating this new contact, or click Cancel to return to the module without creating the contact.',
    'NTC_COPY_ALTERNATE_ADDRESS' => 'Copy alternate address to primary address',
    'NTC_COPY_PRIMARY_ADDRESS' => 'Copy primary address to alternate address',
    'NTC_DELETE_CONFIRMATION' => 'Are you sure you want to delete this record?',
    'NTC_OPPORTUNITY_REQUIRES_ACCOUNT' => 'Creating an opportunity requires an account.\n Please either create a new account or select an existing one.',
    'NTC_REMOVE_CONFIRMATION' => 'Are you sure you want to remove this contact from the case?',
    'NTC_REMOVE_DIRECT_REPORT_CONFIRMATION' => 'Are you sure you want to remove this record as a direct report?',

	'LBL_USER_PASSWORD' => 'Password:',

	'LBL_LEADS_SUBPANEL_TITLE' => 'Leads',
	'LBL_OPPORTUNITIES_SUBPANEL_TITLE' => 'Opportunities',
	'LBL_DOCUMENTS_SUBPANEL_TITLE' => 'Documents',
	'LBL_COPY_ADDRESS_CHECKED_PRIMARY' => 'Copy to Primary Address',
	'LBL_COPY_ADDRESS_CHECKED_ALT' => 'Copy to Other Address',

	'LBL_CASES_SUBPANEL_TITLE' => 'Cases',
	'LBL_BUGS_SUBPANEL_TITLE' => 'Bugs',
	'LBL_PROJECTS_SUBPANEL_TITLE' => 'Projects',
    'LBL_PROJECTS_RESOURCES' => 'Projects Resources',
	'LBL_TARGET_OF_CAMPAIGNS' => 'Campaigns (Target of) :',
	'LBL_CAMPAIGNS'	=>	'Campaigns',
	'LBL_CAMPAIGN_LIST_SUBPANEL_TITLE'=>'Campaigns',
	'LBL_LIST_CITY' => 'City',
	'LBL_LIST_STATE' => 'State',
	'LBL_HOMEPAGE_TITLE' => 'My Contacts',
    'LBL_OPPORTUNITIES' => 'Opportunities',

	'LBL_CHECKOUT_DATE'=>'Checkout Date',
    'LBL_CONTACTS_SUBPANEL_TITLE' => 'Contacts',
    'LBL_BUYINGCENTER_SUBPANEL_TITLE' => 'Buying Center',
    'LBL_PROJECT_SUBPANEL_TITLE' => 'Projects',
    'LBL_CAMPAIGNS_SUBPANEL_TITLE' => 'Campaigns',
    'LNK_IMPORT_CONTACTS' => 'Import Contacts',

    //For export labels
    'LBL_PHONE_HOME' => 'Phone Home',
    'LBL_PHONE_MOBILE' => 'Phone Mobile',
    'LBL_PHONE_WORK' => 'Phone Work',
    'LBL_PHONE_OTHER' => 'Phone Other',
    'LBL_PHONE_FAX' => 'Phone Fax',
    'LBL_CAMPAIGN_ID' => 'Campaign ID',

    'LBL_EXPORT_ASSIGNED_USER_NAME' => 'Assigned User Name',
    'LBL_EXPORT_ASSIGNED_USER_ID' => 'Assigned User ID',
    'LBL_EXPORT_MODIFIED_USER_ID' => 'Modified By ID',
    'LBL_EXPORT_CREATED_BY' => 'Created By ID',
    'LBL_EXPORT_PHONE_HOME' => 'Home Phone',
    'LBL_EXPORT_PHONE_MOBILE' => 'Mobile Phone',
    // SNIP
    'LBL_CONTACT_HISTORY_SUBPANEL_TITLE' => 'Related Contacts\' Emails',
    'LBL_USER_SYNC' => 'User Sync',

    'LBL_CONTACT_DATA' => 'Contacts Data',
	'LBL_CONTACT_INTERESTS' => 'Interests',
	'LBL_PERSONAL_INTERESTS' => 'Interests',

    'LBL_DEGREE1' => 'Degree 1',
    'LBL_DEGREE2' => 'Degree 2',
    'LBL_TITLE_DD' => 'Function',
    'LBL_EXT_ID' => 'external ID'
);

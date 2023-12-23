<?php
/***** SPICE-KREPORTER-HEADER-SPACEHOLDER *****/

global $kreporterWhereOperatorCount;

$kreporterWhereOperatorCount = [
    'ignore' => 0,
    'equals' => 1,
    'notequal' => 1,
    'before' => 1,
    'after' => 1,
    'between' => 2,
    'today' => 0,
    'past' => 0,
    'future' => 0,
    'firstdayofmonth' => 0,
    'nthdayofmonth' => 1,
    'thismonth' => 0,
    'notthismonth' => 0,
    'thisweek' => 0,
    'nextnmonth' => 1,
    'nextnmonthDaily' => 1,    
    'next3month' => 0,
    'next3monthDaily' => 0, 
    'next6month' => 0, 
    'next6monthDaily' => 0, 
    'last3monthDaily' => 0, 
    'last6month' => 0, 
    'last6monthDaily' => 0,
    'lastnfmonth' => 1,
    'lastnmonthDaily' => 1,
    'lastmonth' => 0,
    'last3month' => 0,
    'lastnfquarter' => 1,
    'ndaysago' => 1,
    'lessthanndays' => 1,
    'lastndays' => 1,
    'lastnfdays' => 1,
    'lastnddays' => 1,
    'lastnweeks' => 1,
    'notlastnweeks' => 1,
    'lastnfweeks' => 1,
    'nextndays' => 1,
    'nextnddays' => 1,
    'betwndays' => 2,
    'betwnddays' => 2,
    'nextnweeks' => 1,
    'notnextnweeks' => 1,
    'nextnfquarter' => 1,
    'nextnyear' => 1,
    'nexttnyearDaily' => 1,    
    'thisyear' => 0,
    'lastyear' => 0,
    'lastnyear' => 1,
    'lastnyearDaily' => 1,    
    'tyytd' => 0,
    'lyytd' => 0,
    'isempty' => 0,
    'isemptyornull' => 0,
    'isnull' => 0,
    'isnotempty' => 0,
    'oneof' => 1,
    'oneofnot' => 1,
    'oneofnotornull' => 1,
    'starts' => 1,
    'notstarts' => 1,
    'contains' => 1,
    'notcontains' => 1,
    'greater' => 1,
    'greaterequal' => 1,
    'less' => 1,
    'lessequal' => 1,
    'autocomplete' => 1,
    'soundslike' => 1
];

$kreporterWhereOperatorTypes = [
    'varchar' => [
        'equals',
        'soundslike',
        'notequal',
        'greater',
        'greaterequal',
        'less',
        'lessequal',
        'starts',
        'notstarts',
        'contains',
        'notcontains',
        'between',
        'isempty',
        'isemptyornull',
        'isnull',
        'isnotempty'
    ],
    'varchargrouped' => [
        'equals',
        'eqgrouped',
        'oneof',
        'noteqgrouped',
        'oneofnot',
        'soundslike',
        'notequal',
        'greater',
        'greaterequal',
        'less',
        'lessequal',
        'starts',
        'notstarts',
        'contains',
        'notcontains',
        'between',
        'isempty',
        'isemptyornull',
        'isnull',
        'isnotempty'
    ],
    'enum' => [
        'equals',
        'notequal',
        'oneof',
        'oneofnot',
        'oneofnotornull',
        'starts',
        'notstarts',
        'contains',
        'notcontains',
        'isempty',
        'isemptyornull',
        'isnull',
        'isnotempty'
    ],
    'category' => [
        'equals',
        'notequal',
        'oneof',
        'oneofnot',
        'oneofnotornull',
        'isempty',
        'isemptyornull',
        'isnull',
        'isnotempty'
    ],
    'id' => [
        'equals',
        'autocomplete',
        'isempty',
        'isemptyornull',
        'isnull',
        'isnotempty'
    ],
    'double' => [
        'equals',
        'notequal',
        'greater',
        'greaterequal',
        'less',
        'lessequal',
        'between',
        'isempty',
        'isemptyornull',
        'isnull',
        'isnotempty'
    ],
    'date' => [
        'equals',
        'notequal',
        'before',
        // 'lessequal',
        'after',
        // 'greaterequal',
        'past',
        'future',
        'between',
        'today',
        'ndaysago',
        'lessthanndays',
        'lastndays',
        'lastnfdays',
        'lastnddays',
        'nextndays',
        'nextnddays',
        'betwndays',
        'betwnddays',
        'thisweek',
        'lastnweeks',
        'notlastnweeks',
        'lastnfweeks',
        'nextnweeks',
        'notnextnweeks',
        'firstdayofmonth',
        // 'nthdayofmonth',
        'thismonth',
        'lastmonth',
        'last3month',
        'notthismonth',
        'nextnmonth',
        'nextnmonthDaily',
        'next3month',
        'next3monthDaily', 
        'next6month', 
        'next6monthDaily', 
        'nextnfquarter',        
        'last3monthDaily', 
        'last6month', 
        'last6monthDaily',
        'lastnfmonth',
        'lastnmonthDaily',
        'lastnfquarter',        
        'lastnyear',
        'lastnyearDaily',
        'thisyear',
        'lastyear',
        'nextnyear',
        'nextnyearDaily',
        'tyytd',
        'lyytd',
        'isempty',
        'isemptyornull',
        'isnull',
        'isnotempty'
    ],
    'bool' => [
        'equals',
        'notequal',
        'isemptyornull',
        'isnull'
    ]
];

$kreporterWhereOperatorAssignments = [
    'id' => 'id',
    'varchar' => 'varchar',
    // 2013-08-26 add phone field ... BUG#495
    'phone' => 'varchar',
    'name' => 'varchar',
    'relate' => 'varchar',
    'text' => 'varchar',
    'char' => 'varchar',
    'double' => 'double',
    'int' => 'double',
    'bigint' => 'double', //CR1000254
    'float' => 'double',
     //2013-04-06 type decimal
    'decimal' => 'double',
    'currency' => 'double',
    'bool' => 'bool',
    'enum' => 'enum',
    'multienum' => 'enum',
    'radioenum' => 'enum',
    'parent_type' => 'enum',
    'user_name' => 'enum',
    'assigned_user_name' => 'enum',
    'team_name' => 'enum',
    'date' => 'date',
    'datetime' => 'date',
    'datetimecombo' => 'date', 
    //2013-08-07 added fixed field
    'fixed' => 'varchar',
    'category' => 'category',
];

if (file_exists('custom/modules/KReports/config/KReportWhereOperators.php'))
    include('custom/modules/KReports/config/KReportWhereOperators.php');



CREATE TABLE IF NOT EXISTS `organisationContactLog` (
`organisation_contact_id` integer primary key AUTO_INCREMENT,
`case_id` integer ,
`contact_name` varchar(100) ,
`organisation_name` varchar(100) ,
`area` varchar(100) ,
`role` varchar(100) ,
`contact_type` varchar(100) ,
`permission` boolean ,
  `contact_reason` integer ,
  `att_documents` varchar(100) ,
  `vv_worker` varchar(100) ,
  `agreed_contact_time` datetime,
  `contact_details` text
) ENGINE=InnoDB;

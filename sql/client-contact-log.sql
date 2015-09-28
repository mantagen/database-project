
CREATE TABLE IF NOT EXISTS `clientContactLog` (
`client_contact_id` integer primary key AUTO_INCREMENT,
`case_id` integer ,
  `date` date ,
  `time` time ,
  `contact_type` varchar(100) ,
  `num_supported` integer ,
  `other_support` varchar(100) ,
  `name` varchar(100) ,
  `att_documents` varchar(100) ,
  `outcomes` varchar(100) ,
  `vv_worker` varchar(100) ,
  `agreed_contact_time` datetime,
  `contact_details` text
) ENGINE=InnoDB;



CREATE TABLE IF NOT EXISTS `enqiryLog` (
`enqiry_log_id` integer primary key AUTO_INCREMENT,
`case_id` integer ,
  `contact_source` varchar(100) ,
  `enquiry_type` varchar(100) ,
  `where_hear` varchar(100) ,
  `first_name` varchar(100) ,
  `last_name` varchar(100) ,
  `organisation` varchar(100) ,
  `role` varchar(100) ,
  `postcode` varchar(100) ,
  `phone` varchar(100) ,
  `mobile` varchar(100) ,
  `email` varchar(100) ,
  `enquiry_details` text ,
  `action` text ,
  `att_documents` varchar(100)
) ENGINE=InnoDB;

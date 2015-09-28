
CREATE TABLE IF NOT EXISTS `outreachLog` (
`outreach_log_id` integer primary key AUTO_INCREMENT,
`case_id` integer ,
`goal` varchar(100) ,
`main_contact` varchar(100) ,
`role` varchar(100) ,
  `date` date ,
  `outreach_type` varchar(100) ,
  `group` varchar(100) ,
  `num_participants` integer ,
  `length_time` varchar(100) ,
  `att_documents` varchar(100) ,
  `follow_up` varchar(100) ,
  `outcomes` varchar(100) ,
  `vv_worker_1` varchar(100) ,
  `vv_worker_2` varchar(100) ,
  `vv_worker_3` varchar(100) ,
  `vv_worker_4` varchar(100) ,
  `vv_worker_5` varchar(100)
) ENGINE=InnoDB;

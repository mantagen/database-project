CREATE TABLE IF NOT EXISTS `cwActionSheet` (
    `cw_action_id` integer primary key AUTO_INCREMENT,
    `case_id` integer ,
  `action_date` date,
  `caseworker_name` varchar(100) ,
  `issue` varchar(100) ,
  `risk` varchar(100) ,
  `goal` varchar(100) ,
  `victims_state` varchar(100) ,
  `action_type` varchar(100) ,
  `action` text,
  `completed_date` date,
  `outcome` varchar(100) ,
  `victims_state_vv` varchar(100) ,
  `review` varchar(100) ,
  `three_months` varchar(100) ,
  `six_months` varchar(100)
) ENGINE=InnoDB;

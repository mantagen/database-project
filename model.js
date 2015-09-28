var DB = require('./db').DB;

var User = DB.Model.extend({
    tableName: 'tblUsers',
    idAttribute: 'userId',
});

var Cases = DB.Model.extend({
    tableName: 'caseDetails',
    idAttribute: 'case_id',
    cwActions: function() {
        return this.hasMany(CwActions);
    },
    volunteerActions: function() {
        return this.hasMany(VolunteerActions);
    },
    clientContactLog: function() {
        return this.hasMany(ClientContactLog);
    },
    organisationContactLog: function() {
        return this.hasMany(OrganisationContactLog);
    },
    outreachLog: function() {
        return this.hasMany(OutreachLog);
    },
});

var CwActions = DB.Model.extend({
    tableName: 'cwActionSheet',
    idAttribute: 'cw_action_id',
    caseId: function() {
        return this.belongsTo(Cases);
    }
});

var VolunteerActions = DB.Model.extend({
    tableName: 'volunteerActionSheet',
    idAttribute: 'volunteer_action_id',
    caseId: function() {
        return this.belongsTo(Cases);
    }
});

var ClientContactLog = DB.Model.extend({
    tableName: 'clientContactLog',
    idAttribute: 'client_contact_id',
    caseId: function() {
        return this.belongsTo(Cases);
    }
});

var OrganisationContactLog = DB.Model.extend({
    tableName: 'organisationContactLog',
    idAttribute: 'organisation_contact_id',
    caseId: function() {
        return this.belongsTo(Cases);
    }
});

var OutreachLog = DB.Model.extend({
    tableName: 'outreachLog',
    idAttribute: 'outreach_log_id',
    caseId: function() {
        return this.belongsTo(Cases);
    }
});

var EnquiryLog = DB.Model.extend({
    tableName: 'enqiryLog',
    idAttribute: 'enqiry_log_id',
});

module.exports = {
    User: User,
    Cases: Cases,
    CwActions:CwActions,
    VolunteerActions:VolunteerActions,
    ClientContactLog:ClientContactLog,
    OrganisationContactLog:OrganisationContactLog,
    OutreachLog:OutreachLog,
    EnquiryLog: EnquiryLog
};

// vendor library
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');

// custom library
// model
var Model = require('./model');

// index
var index = function(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/signin');
    } else {

        var user = req.user;

        if (user !== undefined) {
            user = user.toJSON();
        }
        res.render('index', {
            title: 'Home',
            user: user
        });
    }
};


// sign in
// GET
var signIn = function(req, res, next) {
    if (req.isAuthenticated()) res.redirect('/');
    res.render('signin', {
        title: 'Sign In'
    });
};


// sign in
// POST
var signInPost = function(req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin'
    }, function(err, user, info) {
        if (err) {
            return res.render('signin', {
                title: 'Sign In',
                errorMessage: err.message
            });
        }

        if (!user) {
            return res.render('signin', {
                title: 'Sign In',
                errorMessage: info.message
            });
        }
        return req.logIn(user, function(err) {
            if (err) {
                return res.render('signin', {
                    title: 'Sign In',
                    errorMessage: err.message
                });
            } else {
                return res.redirect('/');
            }
        });
    })(req, res, next);
};


// sign up
// GET
var signUp = function(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/signin');
    } else {
        res.render('usermaintenance', {
            title: 'User maintenance'
        });
    }
};

// sign up
// POST
var signUpPost = function(req, res, next) {
    var user = req.body;
    var usernamePromise = null;
    usernamePromise = new Model.User({
        username: user.username
    }).fetch();

    return usernamePromise.then(function(model) {
        if (model) {
            res.render('usermaintenance', {
                title: 'User maintenance',
                errorMessage: 'username already exists'
            });
        } else {
            //****************************************************//
            // MORE VALIDATION GOES HERE(E.G. PASSWORD VALIDATION)
            //****************************************************//
            var password = user.password;
            var hash = bcrypt.hashSync(password);

            var signUpUser = new Model.User({
                username: user.username,
                password: hash
            });

            signUpUser.save().then(function(model) {
                // sign in the newly registered user
                signInPost(req, res, next);
            });
        }
    });
};

function isEmpty(obj) {
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length && obj.length > 0) return false;
    if (obj.length === 0) return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and toValue enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}
// case maintenance
// GET

var newCasePost = function(req, res, next) {
    var user = req.body;
    console.log('thisfar');
    var thisCase = new Model.Cases({
        referral_date: user.referralDate,
        log_type: user.caseLogType,
        report_taken_by: user.reportTakenBy,
        assigned_to: user.assignedTo,
        referral_type: user.referralType,
        ref_organisation: user.refOrganisation,
        ref_first_name: user.refFirstName,
        ref_last_name: user.refLastName,
        ref_role: user.refRole,
        ref_victim_aware: user.refVictimAware,
        ref_add_1: user.refAdd1,
        ref_add_2: user.refAdd2,
        ref_town: user.refTown,
        ref_post_code: user.refPostCode,
        ref_tel: user.refTel,
        ref_mob: user.refMob,
        ref_email: user.refEmail,
        ref_best_time: user.refBestTime,
        ref_preferred_contact: user.refPreferredContact,
        ref_referrer: user.refReferrer,
        ref_feedback: user.refFeedback,
        ref_permission: user.refPermmision,
        ref_other_info: user.refOtherInfo,
        vic_first_name: user.vicFirstName,
        vic_last_name: user.vicLastName,
        vic_title: user.vicTitle,
        vic_dob: user.vicDob,
        vic_gender: user.vicGender,
        vic_ethnic: user.vicEthic,
        vic_nationality: user.vicNationality,
        vic_sexuality: user.vicSexuality,
        vic_rorb: user.vicRorb,
        vic_gender_id: user.vicGenderId,
        vic_age: user.vicAge,
        vic_add_1: user.vicAdd1,
        vic_add_2: user.vicAdd2,
        vic_town: user.vicTown,
        vic_post_code: user.vicPostCode,
        vic_tenure: user.vicTenure,
        vic_tel: user.vicTel,
        vic_mob: user.vicMob,
        vic_email: user.vicEmail,
        vic_best_time: user.vicBestTime,
        vic_preferred_contact: user.vicPreferredContact,
        vic_pets: user.vicPets,
        vic_ward: user.vicWard,
        vic_other_info: user.vicOtherInfo,
        vic_disabilities: user.vicDisabilities,
        cohab_title: user.cohabTitle,
        cohab_first_name: user.cohabFirstName,
        cohab_last_name: user.cohabLastName,
        cohab_dob: user.cohabDob,
        cohab_relationship: user.cohabRelationship,
        cohab2_title: user.cohab2Title,
        cohab2_first_name: user.cohab2FirstName,
        cohab2_last_name: user.cohab2LastName,
        cohab2_dob: user.cohab2Dob,
        cohab2_relationship: user.cohab2Relationship,
        cohab3_title: user.cohab3Title,
        cohab3_first_name: user.cohab3FirstName,
        cohab3_last_name: user.cohab3LastName,
        cohab3_dob: user.cohab3Dob,
        cohab3_relationship: user.cohab3Relationship,
        cohab4_title: user.cohab4Title,
        cohab4_first_name: user.cohab4FirstName,
        cohab4_last_name: user.cohab4LastName,
        cohab4_dob: user.cohab4Dob,
        cohab4_relationship: user.cohab4Relationship,
        cohab5_title: user.cohab5Title,
        cohab5_first_name: user.cohab5FirstName,
        cohab5_last_name: user.cohab5LastName,
        cohab5_dob: user.cohab5Dob,
        cohab5_relationship: user.cohab5Relationship,
        othersupport_permission: user.othersupportPermission,
        othersupport_organisation: user.othersupportOrgansation,
        othersupport_title: user.othersupportTitle,
        othersupport_first_name: user.othersupportFirstName,
        othersupport_last_name: user.othersupportLastName,
        othersupport_add_1: user.othersupportAdd1,
        othersupport_add_2: user.othersupportAdd2,
        othersupport_town: user.othersupportTown,
        othersupport_post_code: user.othersupportPostCode,
        othersupport_tel: user.othersupportTel,
        othersupport_mob: user.othersupportMob,
        othersupport_email: user.othersupportEmail,
        othersupport_preferred_contact: user.othersupportPreferredContact,
        othersupport_best_time: user.othersupportBestTime,
        othersupport_relationship: user.othersupportRelationship,
        othersupport2_permission: user.othersupport2Permission,
        othersupport2_organisation: user.othersupport2Organsation,
        othersupport2_title: user.othersupport2Title,
        othersupport2_first_name: user.othersupport2FirstName,
        othersupport2_last_name: user.othersupport2LastName,
        othersupport2_add_1: user.othersupport2Add1,
        othersupport2_add_2: user.othersupport2Add2,
        othersupport2_town: user.othersupport2Town,
        othersupport2_post_code: user.othersupport2PostCode,
        othersupport2_tel: user.othersupport2Tel,
        othersupport2_mob: user.othersupport2Mob,
        othersupport2_email: user.othersupport2Email,
        othersupport2_preferred_contact: user.othersupport2PreferredContact,
        othersupport2_best_time: user.othersupport2BestTime,
        othersupport2_relationship: user.othersupport2Relationship,
        othersupport3_permission: user.othersupport3Permission,
        othersupport3_organisation: user.othersupport3Organsation,
        othersupport3_title: user.othersupport3Title,
        othersupport3_first_name: user.othersupport3FirstName,
        othersupport3_last_name: user.othersupport3LastName,
        othersupport3_add_1: user.othersupport3Add1,
        othersupport3_add_2: user.othersupport3Add2,
        othersupport3_town: user.othersupport3Town,
        othersupport3_post_code: user.othersupport3PostCode,
        othersupport3_tel: user.othersupport3Tel,
        othersupport3_mob: user.othersupport3Mob,
        othersupport3_email: user.othersupport3Email,
        othersupport3_preferred_contact: user.othersupport3PreferredContact,
        othersupport3_best_time: user.othersupport3BestTime,
        othersupport3_relationship: user.othersupport3Relationship,
        incident_po_reported: user.incidentPoReported,
        incident_po_wanted: user.incdentPoWanted,
        incident_po_log_no: user.incidentPoLogNo,
        incident_po_date: user.indentPoDate,
        incident_po_badge: user.incidentPoBadge,
        incident_date: user.incdentDate,
        incident_time: user.incidentTime,
        incident_town: user.incidentTown,
        incident_type: user.incidentType,
        incident_space: user.incidentSpace,
        incident_form: user.incidentForm,
        incident_add_1: user.incidentAdd1,
        incident_add_2: user.incidentAdd2,
        incident_post_code: user.incidentPostCode,
        incident_how_affected: user.incidentHowAffected,
        incident_trans: user.incidentTrans,
        incident_trans_town: user.incidentTransTown,
        incident_trans_type: user.incidentTransType,
        incident_trans_service_number: user.incidentTransServiceNumber,
        incident_trans_from: user.incidentTransFrom,
        incident_trans_to: user.incidentTransTo,
        incident_desc: user.incidentDesc,
        incident_injury: user.incidentInjury,
        incident_injury_details: user.incidentInjuryDetails,
        incident_cctv: user.incidentCctv,
        incident_cctv_detail: user.incidentCctvDetail,
        offender_no: user.offenderNo,
        offender_known: user.offenderKnown,
        offender_influ: user.offenderInflu,
        offender_first_name: user.offenderFirstName,
        offender_last_name: user.offenderLastName,
        offender_title: user.offenderTitle,
        offender_age: user.offenderAge,
        offender_gender: user.offenderGender,
        offender_ethnic: user.offenderEthnic,
        offender_add_1: user.offenderAdd1,
        offender_add_2: user.offenderAdd2,
        offender_town: user.offenderTown,
        offender_post_code: user.offenderPostCode,
        offender_tel: user.offenderTel,
        offender_mob: user.offenderMob,
        offender_email: user.offenderEmail,
        offender_description: user.offenderDescription,
        offender2_first_name: user.offender2FirstName,
        offender2_last_name: user.offender2LastName,
        offender2_title: user.offender2Title,
        offender2_age: user.offender2Age,
        offender2_gender: user.offender2Gender,
        offender2_ethnic: user.offender2Ethnic,
        offender2_add_1: user.offender2Add1,
        offender2_add_2: user.offender2Add2,
        offender2_town: user.offender2Town,
        offender2_post_code: user.offender2PostCode,
        offender2_tel: user.offender2Tel,
        offender2_mob: user.offender2Mob,
        offender2_email: user.offender2Email,
        offender2_description: user.offender2Description,
        offender3_first_name: user.offender3FirstName,
        offender3_last_name: user.offender3LastName,
        offender3_title: user.offender3Title,
        offender3_age: user.offender3Age,
        offender3_gender: user.offender3Gender,
        offender3_ethnic: user.offender3Ethnic,
        offender3_add_1: user.offender3Add1,
        offender3_add_2: user.offender3Add2,
        offender3_town: user.offender3Town,
        offender3_post_code: user.offender3PostCode,
        offender3_tel: user.offender3Tel,
        offender3_mob: user.offender3Mob,
        offender3_email: user.offender3Email,
        offender3_description: user.offender3Description,
        offender4_first_name: user.offender4FirstName,
        offender4_last_name: user.offender4LastName,
        offender4_title: user.offender4Title,
        offender4_age: user.offender4Age,
        offender4_gender: user.offender4Gender,
        offender4_ethnic: user.offender4Ethnic,
        offender4_add_1: user.offender4Add1,
        offender4_add_2: user.offender4Add2,
        offender4_town: user.offender4Town,
        offender4_post_code: user.offender4PostCode,
        offender4_tel: user.offender4Tel,
        offender4_mob: user.offender4Mob,
        offender4_email: user.offender4Email,
        offender4_description: user.offender4Description,
        offender5_first_name: user.offender5FirstName,
        offender5_last_name: user.offender5LastName,
        offender5_title: user.offender5Title,
        offender5_age: user.offender5Age,
        offender5_gender: user.offender5Gender,
        offender5_ethnic: user.offender5Ethnic,
        offender5_add_1: user.offender5Add1,
        offender5_add_2: user.offender5Add2,
        offender5_town: user.offender5Town,
        offender5_post_code: user.offender5PostCode,
        offender5_tel: user.offender5Tel,
        offender5_mob: user.offender5Mob,
        offender5_email: user.offender5Email,
        offender5_description: user.offender5Description,
        offender_vehicle_make: user.offenderVehicleMake,
        offender_vehicle_model: user.offenderVehicleModel,
        offender_vehicle_colour: user.offenderVehicleColour,
        offender_vehicle_reg: user.offenderVehicleReg,
        others_affected: user.othersAffected,
        others_title: user.othersTitle,
        others_first_name: user.othersFirstName,
        others_last_name: user.othersLastName,
        others_dob: user.othersDob,
        others_age: user.othersAge,
        others_gender: user.othersGender,
        others_ethnic: user.othersEthnic,
        others_disability: user.othersDisability,
        others_religion: user.othersReligion,
        others_trans: user.othersTrans,
        others_sexuality: user.othersSexuality,
        others_nationality: user.othersNationality,
        others_add_1: user.othersAdd1,
        others_add_2: user.othersAdd2,
        others_town: user.othersTown,
        others_post_code: user.othersPostCode,
        others_tel: user.othersTel,
        others_mob: user.othersMob,
        others_relationship: user.othersRelationship,
        others_school: user.othersSchool,
        others2_title: user.others2Title,
        others2_first_name: user.others2FirstName,
        others2_last_name: user.others2LastName,
        others2_dob: user.others2Dob,
        others2_age: user.others2Age,
        others2_gender: user.others2Gender,
        others2_ethnic: user.others2Ethnic,
        others2_disability: user.others2Disability,
        others2_religion: user.others2Religion,
        others2_trans: user.others2Trans,
        others2_sexuality: user.others2Sexuality,
        others2_nationality: user.others2Nationality,
        others2_add_1: user.others2Add1,
        others2_add_2: user.others2Add2,
        others2_town: user.others2Town,
        others2_post_code: user.others2PostCode,
        others2_tel: user.others2Tel,
        others2_mob: user.others2Mob,
        others2_relationship: user.others2Relationship,
        others2_school: user.others2School,
        others3_title: user.others3Title,
        others3_first_name: user.others3FirstName,
        others3_last_name: user.others3LastName,
        others3_dob: user.others3Dob,
        others3_age: user.others3Age,
        others3_gender: user.others3Gender,
        others3_ethnic: user.others3Ethnic,
        others3_disability: user.others3Disability,
        others3_religion: user.others3Religion,
        others3_trans: user.others3Trans,
        others3_sexuality: user.others3Sexuality,
        others3_nationality: user.others3Nationality,
        others3_add_1: user.others3Add1,
        others3_add_2: user.others3Add2,
        others3_town: user.others3Town,
        others3_post_code: user.others3PostCode,
        others3_tel: user.others3Tel,
        others3_mob: user.others3Mob,
        others3_relationship: user.others3Relationship,
        others3_school: user.others3School,
        others4_title: user.others4Title,
        others4_first_name: user.others4FirstName,
        others4_last_name: user.others4LastName,
        others4_dob: user.others4Dob,
        others4_age: user.others4Age,
        others4_gender: user.others4Gender,
        others4_ethnic: user.others4Ethnic,
        others4_disability: user.others4Disability,
        others4_religion: user.others4Religion,
        others4_trans: user.others4Trans,
        others4_sexuality: user.others4Sexuality,
        others4_nationality: user.others4Nationality,
        others4_add_1: user.others4Add1,
        others4_add_2: user.others4Add2,
        others4_town: user.others4Town,
        others4_post_code: user.others4PostCode,
        others4_tel: user.others4Tel,
        others4_mob: user.others4Mob,
        others4_relationship: user.others4Relationship,
        others4_school: user.others4School,
        others5_title: user.others5Title,
        others5_first_name: user.others5FirstName,
        others5_last_name: user.others5LastName,
        others5_dob: user.others5Dob,
        others5_age: user.others5Age,
        others5_gender: user.others5Gender,
        others5_ethnic: user.others5Ethnic,
        others5_disability: user.others5Disability,
        others5_religion: user.others5Religion,
        others5_trans: user.others5Trans,
        others5_sexuality: user.others5Sexuality,
        others5_nationality: user.others5Nationality,
        others5_add_1: user.others5Add1,
        others5_add_2: user.others5Add2,
        others5_town: user.others5Town,
        others5_post_code: user.others5PostCode,
        others5_tel: user.others5Tel,
        others5_mob: user.others5Mob,
        others5_relationship: user.others5Relationship,
        others5_school: user.others5School,
        others_org: user.othersOrg,
        others_org_name: user.othersOrgName,
        others_org_first_name: user.othersOrgFirstName,
        others_org_last_name: user.othersOrgLastName,
        others_org_role: user.othersOrgRole,
        others_org_title: user.othersOrgTitle,
        others_org_email: user.othersOrgEmail,
        others_org_add_1: user.othersOrgAdd1,
        others_org_add_2: user.othersOrgAdd2,
        others_org_town: user.othersOrgTown,
        others_org_post_code: user.othersOrgPostCode,
        others_org_tel: user.othersOrgTel,
        others_org_mob: user.othersOrgMob,
        others_org_best_time: user.othersOrgBestTime,
        others_org_preferred_contact: user.othersOrgPreferredContact,
        others_org_feedback: user.othersOrgFeedback,
        others_org_info: user.othersOrgInfo,
        others_org_permission: user.othersOrgPermission,
        others2_org_name: user.others2OrgName,
        others2_org_first_name: user.others2OrgFirstName,
        others2_org_last_name: user.others2OrgLastName,
        others2_org_role: user.others2OrgRole,
        others2_org_title: user.others2OrgTitle,
        others2_org_email: user.others2OrgEmail,
        others2_org_add_1: user.others2OrgAdd1,
        others2_org_add_2: user.others2OrgAdd2,
        others2_org_town: user.others2OrgTown,
        others2_org_post_code: user.others2OrgPostCode,
        others2_org_tel: user.others2OrgTel,
        others2_org_mob: user.others2OrgMob,
        others2_org_best_time: user.others2OrgBestTime,
        others2_org_preferred_contact: user.others2OrgPreferredContact,
        others2_org_feedback: user.others2OrgFeedback,
        others2_org_info: user.others2OrgInfo,
        others2_org_permission: user.others2OrgPermission,
        others3_org_name: user.others3OrgName,
        others3_org_first_name: user.others3OrgFirstName,
        others3_org_last_name: user.others3OrgLastName,
        others3_org_role: user.others3OrgRole,
        others3_org_title: user.others3OrgTitle,
        others3_org_email: user.others3OrgEmail,
        others3_org_add_1: user.others3OrgAdd1,
        others3_org_add_2: user.others3OrgAdd2,
        others3_org_town: user.others3OrgTown,
        others3_org_post_code: user.others3OrgPostCode,
        others3_org_tel: user.others3OrgTel,
        others3_org_mob: user.others3OrgMob,
        others3_org_best_time: user.others3OrgBestTime,
        others3_org_preferred_contact: user.others3OrgPreferredContact,
        others3_org_feedback: user.others3OrgFeedback,
        others3_org_info: user.others3OrgInfo,
        others3_org_permission: user.others3OrgPermission,
        general_similar_before: user.generalSimilarBefore,
        general_similar_details: user.generalSimilarDetails,
        general_support_needs: user.generalSupportNeeds,
    });

    thisCase.save().then(function(model) {
        // then go to casesPage
        casesPage(req, res, next);
    });

};



var casesPage = function(req, res, next) {
    var reqLog;
    var logPromise;
    if (!req.isAuthenticated()) {
        res.redirect('/signin');
    } else if (!isEmpty(req.query)) {
        // if there's been an actual query!yy
        //console.log(Model.Cases);
        reqLog = req.query;
        logPromise = new Model.Cases({
            id: reqLog.case
        }).fetch({
            withRelated: [reqLog.logtype]
        }).then(function(aCase) {
            console.log(JSON.stringify(aCase.related(reqLog.logtype)));
        });
        res.render('cases', {
            title: 'Case maintenance',
            //logPromise: logPromise
        });
    } else {
        res.render('cases', {
            title: 'Case maintenance'
        });
    }
};

// case worker action logs
var logRequest = function(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/signin');
    } else {
        res.render('cases', {
            title: 'Case maintenance'
        });
    }
};


// sign out
var signOut = function(req, res, next) {
    if (!req.isAuthenticated()) {
        notFound404(req, res, next);
    } else {
        req.logout();
        res.redirect('/signin');
    }
};


// 404 not found
var notFound404 = function(req, res, next) {
    res.status(404);
    res.render('404', {
        title: '404 Not Found'
    });
};



// export functions
/**************************************/
// index
module.exports.index = index;

// sigin in
// GET
module.exports.signIn = signIn;
// POST
module.exports.signInPost = signInPost;

// sign up
// GET
module.exports.signUp = signUp;
// POST
module.exports.signUpPost = signUpPost;

// cases
// casesPage GET
module.exports.casesPage = casesPage;
// POST
module.exports.newCasePost = newCasePost;


// sign out
module.exports.signOut = signOut;

// 404 not found
module.exports.notFound404 = notFound404;

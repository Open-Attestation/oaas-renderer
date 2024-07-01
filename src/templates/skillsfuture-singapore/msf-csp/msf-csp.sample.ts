import { v2 } from '@govtechsg/open-attestation'
import { SkillsfutureSingaporeMsfCspOaDoc } from './msf-csp.types'

export const sample: SkillsfutureSingaporeMsfCspOaDoc = {
    $template: {
        name: 'skillsfuture-singapore/msf-csp',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'Stella Tan Jia Xin',
    issueDate: '2025-05-13',
    expiryDate: '2025-05-26',
    topSkills: {
        displayOrder: 0,
        skills: [
            {
                type: 'CERTIFIED',
                shortName: 'meetings, incentives, conferences and...',
                fullName: 'Meetings, Incentives, Conferences and Training',
                acquiredFrom:
                    'Bachelor of BA (Honours) in Marketing, University of Singapore, Academic Qualification',
            },
            {
                type: 'SELF_DECLARED',
                shortName: 'Communications channel management with no source',
                fullName: 'Communications channel management with no source',
            },
            {
                type: 'SELF_DECLARED',
                shortName: 'Communications channel management',
                fullName: 'Communications channel management',
                acquiredFrom:
                    'Bachelor of BA (Honours) in Marketing, University of Singapore, Academic Qualification',
            },
            {
                type: 'SELF_DECLARED',
                shortName: 'Communications channel management',
                fullName: 'Communications channel management',
                acquiredFrom:
                    'Bachelor of BA (Honours) in Marketing, University of Singapore, Academic Qualification',
            },
            {
                type: 'SELF_DECLARED',
                shortName: 'Communications channel management',
                fullName: 'Communications channel management',
                acquiredFrom:
                    'Bachelor of BA (Honours) in Marketing, University of Singapore, Academic Qualification',
            },
        ],
    },
    employmentHistory: {
        displayOrder: 1,
        positions: [
            {
                isVerifiedEmployee: true,
                position: 'Marketing Manager (Senior Marketing Manager)',
                employer: 'Equinet Academy',
                period: 'Jan 2015 - Present (8 years 8 months)',
            },
            {
                isVerifiedEmployee: true,
                position: 'Employee (Sales & Marketing Executive)',
                employer: 'Tai Hwa (Food manufacturing SME)',
                period: 'Aug 2011 - Jun 2015 (3 years 11 months)',
            },
            {
                isVerifiedEmployee: false,
                position: 'Employee (Sales & Marketing Executive)',
                employer: 'Tai Hwa (Food manufacturing SME)',
                period: 'Aug 2011 - Jun 2015 (3 years 11 months)',
            },
            {
                isVerifiedEmployee: true,
                position: 'Employee (Sales & Marketing Executive)',
                employer: 'Tai Hwa (Food manufacturing SME)',
                period: 'Aug 2011 - Jun 2015 (3 years 11 months)',
            },
            {
                isVerifiedEmployee: false,
                position: 'Employee (Sales & Marketing Executive)',
                employer: 'Tai Hwa (Food manufacturing SME)',
                period: 'Aug 2011 - Jun 2015 (3 years 11 months)',
            },
        ],
    },
    professionalCertifications: {
        displayOrder: 2,
        certifications: [
            {
                isVerified: true,
                certificateTitle: 'WSQ Digital Marketing Strategy',
                source: 'Equinet Academy',
                dateAttained: 'May 2014',
            },
            {
                isVerified: false,
                certificateTitle: 'WSQ Digital Marketing Strategy',
                source: 'Equinet Academy',
                dateAttained: 'May 2014',
            },
            {
                isVerified: false,
                certificateTitle: 'WSQ Digital Marketing Strategy',
                source: 'Equinet Academy',
                dateAttained: 'May 2014',
            },
            {
                isVerified: false,
                certificateTitle: 'WSQ Digital Marketing Strategy',
                source: 'Equinet Academy',
                dateAttained: 'May 2014',
            },
            {
                isVerified: false,
                certificateTitle: 'WSQ Digital Marketing Strategy',
                source: 'Equinet Academy',
                dateAttained: 'May 2014',
            },
            {
                isVerified: false,
                certificateTitle: 'WSQ Digital Marketing Strategy',
                source: 'Equinet Academy',
                dateAttained: 'May 2014',
            },
            {
                isVerified: false,
                certificateTitle: 'WSQ Digital Marketing Strategy',
                source: 'Equinet Academy',
                dateAttained: 'May 2014',
            },
            {
                isVerified: false,
                certificateTitle: 'WSQ Digital Marketing Strategy',
                source: 'Equinet Academy',
                dateAttained: 'May 2014',
            },
            {
                isVerified: false,
                certificateTitle: 'WSQ Digital Marketing Strategy',
                source: 'Equinet Academy',
                dateAttained: 'May 2014',
            },
            {
                isVerified: false,
                certificateTitle: 'WSQ Digital Marketing Strategy',
                source: 'Equinet Academy',
                dateAttained: 'May 2014',
            },
        ],
    },
    academicQualifications: {
        displayOrder: 3,
        qualifications: [
            {
                isVerified: true,
                qualificationTitle: 'Degree in Social Science',
                source: 'National University of Singapore',
                dateAttained: '2010',
            },
            {
                isVerified: true,
                qualificationTitle: 'GCE A Level',
                source: 'SEAB',
                dateAttained: 'May 2014',
            },
            {
                isVerified: true,
                qualificationTitle: 'GCE A Level',
                source: 'SEAB',
                dateAttained: 'May 2014',
            },
            {
                isVerified: true,
                qualificationTitle: 'GCE A Level',
                source: 'SEAB',
                dateAttained: 'May 2014',
            },
            {
                isVerified: true,
                qualificationTitle: 'GCE A Level',
                source: 'SEAB',
                dateAttained: 'May 2014',
            },
        ],
    },
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
    attachments: [
        {
            filename: 'qrpayload.txt',
            type: 'text/plain',
            data: 'VGhpcyBRUiBjb2RlIGlzIGEgc2FtcGxlLg==',
        },
    ],
}

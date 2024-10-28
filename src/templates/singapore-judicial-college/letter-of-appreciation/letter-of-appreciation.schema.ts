import { JSONSchema } from 'json-schema-to-typescript'
import { makeDateType, makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'SingaporeJudicialCollege/LetterOfAppreciation',
    type: 'object',
    required: ['name', 'programmeTitle', 'issueDate', 'memberGroup'],
    properties: {
        name: makeRequiredString('Name of recipient', 'Goh Yihan'),
        programmeTitle: makeRequiredString(
            'Title of the programme',
            'Courtroom Communication'
        ),
        issueDate: makeDateType('Date of issue', '2023-12-31'),
        memberGroup: makeRequiredString('Name of group', 'judiciary'),
    },
    additionalProperties: false,
} as JSONSchema

import { render, screen } from '@testing-library/react'
import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../dummy-template.sample'
import { MinistryOfCommunicationsAndInformationDummyTemplateTemplate } from '../dummy-template.template'

describe('MinistryOfCommunicationsAndInformationDummyTemplateTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <MinistryOfCommunicationsAndInformationDummyTemplateTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c0 pre {
              background-color: lightgray;
              overflow-wrap: anywhere;
              white-space: break-spaces;
            }

            <div
              className="c0"
              id="ministry-of-communications-and-information-dummy-template"
            >
              <div>
                <h1>
                  John Doe
                </h1>
                <pre>
                  {
              "$template": {
                "name": "ministry-of-communications-and-information/dummy-template",
                "type": "EMBEDDED_RENDERER",
                "url": "http://localhost:3000"
              },
              "name": "John Doe",
              "courseTitle": " CSA Milestone Programme",
              "courseStartDate": "2022-05-10",
              "courseEndDate": "2022-06-10",
              "presentedBy": [
                "Cyber Security Agency of Singapore (CSA)"
              ],
              "signatureOne": {
                "name": "Betsie Chacko",
                "title": "Associate Director",
                "organization": "CISA International",
                "signatureHash": "7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab"
              },
              "signatureTwo": {
                "name": "Betsie Chacko",
                "title": "Associate Director",
                "organization": "CISA International",
                "signatureHash": "7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab"
              },
              "issuers": [
                {
                  "name": "institute of blockchain"
                }
              ]
            }
                </pre>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <MinistryOfCommunicationsAndInformationDummyTemplateTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})

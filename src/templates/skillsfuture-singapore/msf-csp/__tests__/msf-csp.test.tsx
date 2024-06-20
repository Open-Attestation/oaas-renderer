import * as React from 'react'
import renderer from 'react-test-renderer'
import { SkillsfutureSingaporeMsfCspTemplate } from '../msf-csp.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../msf-csp.sample'

describe('SkillsfutureSingaporeMsfCspTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <SkillsfutureSingaporeMsfCspTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            <div
              className="bg-gray-200 overflow-wrap-anywhere whitespace-pre-wrap"
              id="skillsfuture-singapore-msf-csp"
            >
              <div>
                <h1>
                  John Doe
                </h1>
                <pre>
                  {
              "$template": {
                "name": "skillsfuture-singapore/msf-csp",
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
            <SkillsfutureSingaporeMsfCspTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})

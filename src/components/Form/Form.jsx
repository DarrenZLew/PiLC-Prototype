import React from "react";
import { Form as ReactForm, Grid } from "react-bootstrap";
import { FormSection } from "./FormSection";

// export const Form = ({ sections, fields, handleAddField }) => {
//   let columns = sections.map(section => (
//     <Col key={section} md={12 / sections.length}>
//       <h2>{section}</h2>
//     </Col>
//   ));
//   return (
//     <Grid>
//       <ReactForm horizontal>
//         <Row>{columns}</Row>
//         <FormSection fields={fields} />
//         <Button bsStyle="primary" block onClick={handleAddField}>
//           Add Input
//         </Button>
//       </ReactForm>
//     </Grid>
//   );
// };

export const Form = ({ data }) => {
  let form = Object.entries(data).map(([k, v]) => {
    return (<FormSection key={k} sectionData={v} />)
  })
  return (
    <Grid>
      <ReactForm>
        {form}
      </ReactForm>
    </Grid>
  )
};
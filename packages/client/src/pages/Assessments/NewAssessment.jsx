import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NewAssessment = () => {
  const { formState: { errors }, handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    const score = parseInt(data.catJudicialSystemContact) +
                  parseInt(data.altercationsWithCats) +
                  parseInt(data.altercationsWithOwner) +
                  parseInt(data.playsWellWithDogs) +
                  parseInt(data.hissesAtStrangers);

    let riskLevel;
    if (score >= 3) {
      riskLevel = `High`;
    } else if (score === 2) {
      riskLevel = `Medium`;
    } else {
      riskLevel = `Low`;
    }

    const assessmentData = {
      catDateOfBirth: data.catDateOfBirth,
      catName: data.catName,
      instrumentType: 1,
      riskLevel,
      score,
    };

    try {
      await AssessmentService.submit(assessmentData);
      alert(`Assessment submitted successfully!`);
    } catch (error) {
      console.error(`Error submitting assessment:`, error);
      alert(`Failed to submit assessment.`);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Cat Behavioral Instrument</h2>
      <Form.Group className="mb-3">
        <Form.Label>Cat Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter cat's name"
          {...register(`catName`, { required: `Cat Name is required` })}
        />
        {errors.CatName && <p>{errors.CatName.message}</p>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cat Date of Birth</Form.Label>
        <Form.Control type="date" {...register(`catDateOfBirth`, { required: `Date of Birth is required` })} />
        {errors.CatDateOfBirth && <p>{errors.catDateOfBirth.message}</p>}
      </Form.Group>

      {/* Questions with Radio Buttons */}
      <Form.Group className="mb-3">
        <Form.Label>Previous contact with the Cat Judicial System</Form.Label>
        <Form.Check
          type="radio"
          label="No (score = 0)"
          value="0"
          {...register(`catJudicialSystemContact`, { required: true })}
          id="noJudicial"
        />
        <Form.Check
          type="radio"
          label="Yes (score = 1)"
          value="1"
          {...register(`catJudicialSystemContact`, { required: true })}
          id="yesJudicial"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Physical altercations with other cats</Form.Label>
        <Form.Check
          type="radio"
          label="0-3 altercations (score = 0)"
          value="0"
          {...register(`altercationsWithCats`, { required: true })}
          id="0to3Altercations"
        />
        <Form.Check
          type="radio"
          label="3+ altercations (score = 1)"
          value="1"
          {...register(`altercationsWithCats`, { required: true })}
          id="3plusAltercations"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Physical altercations with owner (scratching, biting, etc...)</Form.Label>
        <Form.Check
          type="radio"
          label="10+ altercations (score = 1)"
          value="1"
          {...register(`altercationsWithOwner`, { required: true })}
          id="moreThan10Altercations"
        />
        <Form.Check
          type="radio"
          label="0-10 altercations (score = 0)"
          value="0"
          {...register(`altercationsWithOwner`, { required: true })}
          id="lessThan10Altercations"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Plays well with dogs</Form.Label>
        <Form.Check
          type="radio"
          label="No (score = 1)"
          value="1"
          {...register(`playsWellWithDogs`, { required: true })}
          id="doesNotPlayWellWithDogs"
        />
        <Form.Check
          type="radio"
          label="Yes (score = 0)"
          value="0"
          {...register(`playsWellWithDogs`, { required: true })}
          id="playsWellWithDogs"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Hisses at strangers</Form.Label>
        <Form.Check
          type="radio"
          label="Yes (score = 1)"
          value="1"
          {...register(`hissesAtStrangers`, { required: true })}
          id="hissesYes"
        />
        <Form.Check
          type="radio"
          label="No (score = 0)"
          value="0"
          {...register(`hissesAtStrangers`, { required: true })}
          id="hissesNo"
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );

};

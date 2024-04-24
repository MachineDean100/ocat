import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (data) =>
    await AssessmentService.submit(data);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="CatName">Cat Name:</label>
      <input {...register(`firstName`)} />
      <label htmlFor="Catdob"> Cat Date of Birth:</label>
      <input id="dob" type="date" {...register(`dob`)} />
      <div
        style={{
          backgroundColor: `#e9ecef`,
          border: `1px solid #ced4da`,
          borderRadius: `0.25rem`,
          color: `#495057`,
          padding: `0.375rem 0.75rem`,
        }}
      >
        Cat Behavioral Instrument
      </div>
      <fieldset>
        <legend>Has your cat had previous contact with the Cat Judicial System?</legend>
        <label>
          <input
            type="radio"
            value="yes"
            {...register(`catJudicialContact`, { required: `This field is required` })}
          /> Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            {...register(`catJudicialContact`, { required: `This field is required` })}
          /> No
        </label>
        {errors.catJudicialContact && <p>{errors.catJudicialContact.message}</p>}
      </fieldset>
      <fieldset>
        <legend>Physical altercations with other cats</legend>
        <label>
          <input
            type="radio"
            value="0-3"
            {...register(`catFights`, { required: `This field is required` })}
          /> 0-3
        </label>
        <label>
          <input
            type="radio"
            value="3+"
            {...register(`catFights`, { required: `This field is required` })}
          /> 3+
        </label>
        {errors.catJudicialContact && <p>{errors.catJudicialContact.message}</p>}
      </fieldset>
      <fieldset>
        <legend>Physical altercations with owner (scratching, biting, etc...)</legend>
        <label>
          <input
            type="radio"
            value="0-10 altercations"
            {...register(`catFights`, { required: `This field is required` })}
          /> 0-10 altercations
        </label>
        <label>
          <input
            type="radio"
            value="10+ altercations"
            {...register(`catFights`, { required: `This field is required` })}
          /> 10+ altercations
        </label>
        {errors.catJudicialContact && <p>{errors.catJudicialContact.message}</p>}
      </fieldset>
      <fieldset>
        <legend>Plays well with dogs</legend>
        <label>
          <input
            type="radio"
            value="yes"
            {...register(`catJudicialContact`, { required: `This field is required` })}
          /> Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            {...register(`catJudicialContact`, { required: `This field is required` })}
          /> No
        </label>
        {errors.catJudicialContact && <p>{errors.catJudicialContact.message}</p>}
      </fieldset>
      <fieldset>
        <legend>Hisses at strangers</legend>
        <label>
          <input
            type="radio"
            value="yes"
            {...register(`catJudicialContact`, { required: `This field is required` })}
          /> Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            {...register(`catJudicialContact`, { required: `This field is required` })}
          /> No
        </label>
        {errors.catJudicialContact && <p>{errors.catJudicialContact.message}</p>}
      </fieldset>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};

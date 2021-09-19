import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

const Applicant = ({
  data: { personal_details, education, total_experience, skills, score },
}) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='columns'>
          <div className='column is-one-fifth progress-bar-container is-inline-block'>
            <Progress
              theme={{
                active: {
                  symbol: score + '%',
                  trailColor: 'white',
                  color: getColor(score),
                },
                success: {
                  symbol: score + '%',
                  trailColor: 'lime',
                  color: 'green',
                },
              }}
              type='circle'
              percent={score}
            />
          </div>

          <div className='column applicant-detail is-inline-block'>
            <h1 className='title is-3 m-0'>
              {personal_details ? personal_details?.name : ''}
            </h1>
            <h3 className='subtitle is-6 m-0'>
              {education ? education[0] : ''}
            </h3>

            <div className='detail-line'>
              <h3 className='title is-6 m-0 is-inline-block'>Experience:</h3>
              <h3 className='subtitle is-6 m-0 is-inline-block'>
                &nbsp; {total_experience ? total_experience + ' years' : 0}
              </h3>
            </div>

            <div className='tags tags-container'>
              {skills?.map((skill) => {
                return <span className='tag is-info'>{skill}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getColor = (value) => {
  const hue = Math.round(value);
  return ['hsl(', hue, ', 50%, 50%)'].join('');
};

export default Applicant;

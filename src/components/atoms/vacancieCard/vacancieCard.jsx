import './vacancieCard.css'
import Link from 'next/link';

const VacancieCard = ({ id, title, company, salaryMin, salaryMax, source, currency, description, skillsForCard, url, createdAt }) => {


    const visibleSkills = skillsForCard.length > 2 ? skillsForCard.slice(0, 2) : skillsForCard;
    const moreSkills = skillsForCard.length > 2 ? skillsForCard.length - 2 : 0;

    return (
        <div className="vacancieCard">
            <div className="vacancieCardHeader">
                <h2 className="vacancieCardCompany">{company}</h2>
                <h3 className="vacancieCardTitle">{title}</h3>
            </div>
            <div className="vacancieCardMain">
                <div className="vacancieCardSkillsContainer">
                    {visibleSkills.map((skill) => {
                        return (
                            <span
                                key={skill}
                                className='vacancieCardSkill'
                            >{skill}</span>
                        )
                    })}
                    {moreSkills > 0 && (
                        <span
                            key={'more'}
                            className='vacancieCardSkillMore'
                        >+{moreSkills}</span>
                    )}
                    {/* <div className="vacancieCardSkill">{skills[0]}</div>
                    <div className="vacancieCardSkill">{skills[1]}</div>
                    <div className="vacancieCardSkill">+2</div> */}
                </div>
                <div className="vacancieCardSalaryContainer">
                    <p className="vacancieCardSalary">{`${salaryMin} - ${salaryMax}`}</p>
                    <p className="vacancieCardCurrency">{currency == 'RUB' ? "₽" : "$"}<span>/мес</span></p>
                </div>
                <Link
                    href={`vacancies/${id}`}
                    className='vacancieCardLink'
                >
                    <button className="vacancieCardBtn">Посмотреть вакансию &gt;</button>
                </Link>
            </div>
            <div className="vacancieCardFooter">
                <p className="vacancieCardDate">{createdAt}</p>
                <p className="vacancieCardSource">{source}</p>
            </div>
        </div>
    )
}

export default VacancieCard;
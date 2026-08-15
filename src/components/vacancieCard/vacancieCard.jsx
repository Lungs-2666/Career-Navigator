import './vacancieCard.css'


const VacancieCard = ({ title, company, salaryMin, salaryMax, source, currency, description, skills, url, createdAt }) => {

    return (
        <div className="vacancieCard">
            <div className="vacancieCardHeader">
                <h2 className="vacancieCardCompany">{company}</h2>
                <h3 className="vacancieCardTitle">{title}</h3>
            </div>
            <div className="vacancieCardMain">
                <div className="vacancieCardSkillsContainer">
                    <div className="vacancieCardSkill">{skills[0]}</div>
                    <div className="vacancieCardSkill">{skills[1]}</div>
                    <div className="vacancieCardSkill">+2</div>
                </div>
                <div className="vacancieCardSalaryContainer">
                    <p className="vacancieCardSalary">{`${salaryMin} - ${salaryMax}`}</p>
                    <p className="vacancieCardCurrency">{currency == 'RUB' ? "₽" : "$"}<span>/мес</span></p>
                </div>
                <button className="vacancieCardBtn">Посмотреть вакансию &gt;</button>
            </div>
            <div className="vacancieCardFooter">
                <p className="vacancieCardDate">{createdAt}</p>
                <p className="vacancieCardSource">{source}</p>
            </div>
        </div>
    )
}

export default VacancieCard;
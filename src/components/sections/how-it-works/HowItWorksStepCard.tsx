

type StepCardProps = {
    number: string;
    title: string;
    description: string;
};


export default function HowItWorksStepCard({
    number, title, description,
}: StepCardProps) {
    return (
        <article>
            <span>
                {number}
            </span>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
        </article>
    )
}
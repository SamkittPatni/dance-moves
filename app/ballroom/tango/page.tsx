export default function Page() {
  const steps: string[] = ["step 1", "step 2", "step 3", "step 4"]
  return (
  <>
    {steps.map((step) => (
      <div key={step} className="content-center">{step}</div>
    ))}
  </>
  );
}

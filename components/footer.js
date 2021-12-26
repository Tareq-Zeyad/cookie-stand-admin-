export default function Footer(props) {
    return (
        <footer className="flex w-full bg-green-500 py-4 m-0">
      <p className="mx-8">{props.locationsCount} Locations World Wide</p>
    </footer>
    );
  }
const TrophyIcon = ({ fill }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2H14V0H4V2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C4.70625 10.6894 5.2002 11.3505 5.82916 11.8662C6.45813 12.3819 7.2032 12.7367 8 12.9V16H4V18H14V16H10V12.9C10.7968 12.7367 11.5419 12.3819 12.1708 11.8662C12.7998 11.3505 13.2937 10.6894 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82V4H16V5Z"
        fill={fill || "#E1DFDF"}
      />
    </svg>
  );
};

export default TrophyIcon;

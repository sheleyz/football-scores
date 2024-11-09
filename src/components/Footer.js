export default function Footer() {
    return (
        <footer className="bg-brand-secondary">
            <div className="footerText container d-flex flex-column align-items-center px-3 px-lg-5 pt-4 fw-semibold">
                <div className="text-center pt-4 pb-3 fw-normal text-white">
                    <p className="mb-0"><i>Game data updated through 10/28/2024.</i></p>
                    <p><i>Team data updated through 11/4/2024.</i></p>
                    <p>Created by <a href="https://zachsheley.com/" target="_blank" rel="noopener noreferrer">Zach Sheley</a> - Powered by <a href="https://www.kaggle.com/datasets/tobycrabtree/nfl-scores-and-betting-data" target="_blank" rel="noopener noreferrer">this dataset</a> and <a href="https://corndoggydrawings.com/football-doodles" target="_blank" rel="noopener noreferrer">these team logo drawings</a>.</p>
                    <p><a href="https://form.jotform.com/240006603463142" target="_blank" rel="noopener noreferrer">Let me know</a> if you have any suggestions to improve this site.</p>
                    <p className="text-start">Disclaimer: This website is not affiliated, associated, authorized, endorsed by, or in any way officially connected with the National Football League (NFL), or any of its subsidiaries or its affiliates. NFL is a registered trademark of the National Football League. The team names and logos are registered trademarks of the teams indicated. All other NFL-related trademarks are trademarks of the National Football League.</p>
                </div>
            </div>
        </footer>
    );
};

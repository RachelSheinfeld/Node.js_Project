const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // כאן צריכה לבוא בדיקה מול מסד הנתונים (User.findOne...)
        // כרגע נשתמש ב-ID פיקטיבי לצורך הבדיקה
        const userId = "12345";

        const token = jwt.sign(
            { id: userId }, // ודאי ש-userId הוא מחרוזת טקסט ולא undefined
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: "התחברת בהצלחה!",
            token: token
        });

    } catch (error) {
        console.error(error); // זה ידפיס לך בדיוק מה הבעיה בטרמינל
        return res.status(500).json({ message: "שגיאה בשרת בזמן התחברות" });
    }
};
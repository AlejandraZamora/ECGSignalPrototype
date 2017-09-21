package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Embeddable
public class Academic {
	public Academic(){}
@Column(name = "lastGrade")
private String lastGrade;

public String getLastGrade() {
return lastGrade;
}

public void setLastGrade(String lastGrade) {
this.lastGrade = lastGrade;
}
@Column(name = "gradeDate")
private Calendar gradeDate;

public Calendar getGradeDate() {
return gradeDate;
}

public void setGradeDate(Calendar gradeDate) {
this.gradeDate = gradeDate;
}
@Column(name = "gpa")
private Integer gpa;

public Integer getGpa() {
return gpa;
}

public void setGpa(Integer gpa) {
this.gpa = gpa;
}
        }

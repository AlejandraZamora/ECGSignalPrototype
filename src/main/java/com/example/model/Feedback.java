package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "feedbacks", schema = "application")
public class Feedback {
	public Feedback(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "feedback_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "title")
private String title;

public String getTitle() {
return title;
}

public void setTitle(String title) {
this.title = title;
}
@Column(name = "description")
private String description;

public String getDescription() {
return description;
}

public void setDescription(String description) {
this.description = description;
}
@Column(name = "date")
private Calendar date;

public Calendar getDate() {
return date;
}

public void setDate(Calendar date) {
this.date = date;
}
        }

package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "eCGs", schema = "application")
public class ECG {
	public ECG(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "eCG_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "value")
private Integer value;

public Integer getValue() {
return value;
}

public void setValue(Integer value) {
this.value = value;
}
@Column(name = "frequency")
private Integer frequency;

public Integer getFrequency() {
return frequency;
}

public void setFrequency(Integer frequency) {
this.frequency = frequency;
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

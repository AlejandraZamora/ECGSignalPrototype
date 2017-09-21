package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @SuppressWarnings("all")
	    @Entity
	    @Table(name = "patients", schema = "application")
public class Patient {
	public Patient(){}
	@Id
	@Column(name = "id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "name")
private String name;

public String getName() {
return name;
}

public void setName(String name) {
this.name = name;
}
@Column(name = "password")
private String password;

public String getPassword() {
return password;
}

public void setPassword(String password) {
this.password = password;
}
@Column(name = "role")
private String role;

public String getRole() {
return role;
}

public void setRole(String role) {
this.role = role;
}
@Column(name = "lastName")
private String lastName;

public String getLastName() {
return lastName;
}

public void setLastName(String lastName) {
this.lastName = lastName;
}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "feedback", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.Feedback> feedbacks =new java.util.ArrayList<com.example.model.Feedback>();
			public java.util.List<com.example.model.Feedback> getFeedbacks() {
			return feedbacks;
			}
			public void setFeedbacks(java.util.ArrayList<com.example.model.Feedback> feedbacks) {
			this.feedbacks = feedbacks;
			}
@Embedded
private com.example.model.Address address;

public com.example.model.Address getAddress() {
return address;
}

public void setAddress(com.example.model.Address address) {
this.address = address;
}
@Embedded
private com.example.model.Academic academicInfo;

public com.example.model.Academic getAcademicInfo() {
return academicInfo;
}

public void setAcademicInfo(com.example.model.Academic academicInfo) {
this.academicInfo = academicInfo;
}
@Column(name = "birthDate")
private Calendar birthDate;

public Calendar getBirthDate() {
return birthDate;
}

public void setBirthDate(Calendar birthDate) {
this.birthDate = birthDate;
}
@Column(name = "gender")
private String gender;

public String getGender() {
return gender;
}

public void setGender(String gender) {
this.gender = gender;
}
@Column(name = "email")
private String email;

public String getEmail() {
return email;
}

public void setEmail(String email) {
this.email = email;
}
@Column(name = "age")
private Integer age;

public Integer getAge() {
return age;
}

public void setAge(Integer age) {
this.age = age;
}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "eCG", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.ECG> ecgSignal =new java.util.ArrayList<com.example.model.ECG>();
			public java.util.List<com.example.model.ECG> getEcgSignal() {
			return ecgSignal;
			}
			public void setEcgSignal(java.util.ArrayList<com.example.model.ECG> ecgSignal) {
			this.ecgSignal = ecgSignal;
			}
        }

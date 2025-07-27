package com.web.SearchSameComments.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="video_inforamtions")
@NoArgsConstructor
@Getter
@Setter
public class Video {
    @Id
    private int id;
    private String video_url;

}
